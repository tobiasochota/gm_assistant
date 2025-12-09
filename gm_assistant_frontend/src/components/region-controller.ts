export interface Region {
    id: string;
    name: string;
    description: string;
}

const API_BASE = "http://localhost:8080/region";

export async function getRegionById(id: string): Promise<Region> {
    try {
        const response = await fetch(`${API_BASE}/find/${id}`);

        if (!response.ok) {
            throw new Error("Error while fetching region");
        }

        return await response.json();
    } catch (error) {
        console.error("Service error:", error);
        throw error;
    }
}

export async function getAll(): Promise<Region[]> {
    try {
        const response = await fetch(`${API_BASE}/all`);

        if (!response.ok) {
            throw new Error("Error while fetching region");
        }

        return await response.json();
    } catch (error) {
        console.error("Service error:", error);
        throw error;
    }
}
