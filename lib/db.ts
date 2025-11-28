import { db } from "./firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
    getDoc
} from "firebase/firestore";
import { MenuCategory, MenuItem } from "@/data/menuData";

// Categories Collection
const CATEGORIES_COLLECTION = "categories";

// Helper to convert Firestore doc to MenuCategory
// Note: We'll store items as a subcollection or array within category? 
// For simplicity and matching existing structure, let's store items inside the category document for now, 
// or use a subcollection if the list is huge. Given the menu size, storing items in the category doc is fine 
// and reduces reads.

export interface CategoryData extends MenuCategory {
    id: string;
}

export const getCategories = async (): Promise<CategoryData[]> => {
    const q = query(collection(db, CATEGORIES_COLLECTION), orderBy("order", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    } as CategoryData));
};

export const addCategory = async (category: Omit<CategoryData, "id">) => {
    return await addDoc(collection(db, CATEGORIES_COLLECTION), category);
};

export const updateCategory = async (id: string, data: Partial<CategoryData>) => {
    const categoryRef = doc(db, CATEGORIES_COLLECTION, id);
    await updateDoc(categoryRef, data);
};

export const deleteCategory = async (id: string) => {
    await deleteDoc(doc(db, CATEGORIES_COLLECTION, id));
};

// Products (Items) are stored within categories in this simple model.
// To update a product, we update the category it belongs to.
// Alternatively, we could flatten the structure, but let's stick to the existing nested structure for now 
// to minimize frontend refactoring.

export const addProductToCategory = async (categoryId: string, product: MenuItem) => {
    const categoryRef = doc(db, CATEGORIES_COLLECTION, categoryId);
    const categorySnap = await getDoc(categoryRef);

    if (categorySnap.exists()) {
        const categoryData = categorySnap.data() as CategoryData;
        const updatedItems = [...(categoryData.items || []), product];
        await updateDoc(categoryRef, { items: updatedItems });
    }
};

export const updateProductInCategory = async (categoryId: string, productIndex: number, updatedProduct: MenuItem) => {
    const categoryRef = doc(db, CATEGORIES_COLLECTION, categoryId);
    const categorySnap = await getDoc(categoryRef);

    if (categorySnap.exists()) {
        const categoryData = categorySnap.data() as CategoryData;
        const updatedItems = [...categoryData.items];
        updatedItems[productIndex] = updatedProduct;
        await updateDoc(categoryRef, { items: updatedItems });
    }
};

export const deleteProductFromCategory = async (categoryId: string, productIndex: number) => {
    const categoryRef = doc(db, CATEGORIES_COLLECTION, categoryId);
    const categorySnap = await getDoc(categoryRef);

    if (categorySnap.exists()) {
        const categoryData = categorySnap.data() as CategoryData;
        const updatedItems = categoryData.items.filter((_, index) => index !== productIndex);
        await updateDoc(categoryRef, { items: updatedItems });
    }
};

export const seedDatabase = async (initialData: MenuCategory[]) => {
    const categories = await getCategories();
    if (categories.length > 0) {
        console.log("Database already has data. Skipping seed.");
        return;
    }

    for (const category of initialData) {
        await addCategory(category);
    }
    console.log("Database seeded successfully.");
};
