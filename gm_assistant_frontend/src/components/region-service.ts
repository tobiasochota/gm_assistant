import { getAll, getRegionById, Region } from "./region-controller";

export async function loadRegion(id: string): Promise<Region> {
    
    return await getRegionById(id);
}

export async function getAllRegions(): Promise<Region[]> {
    
    return await getAll();
}
