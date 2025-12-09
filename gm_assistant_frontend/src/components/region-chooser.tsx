import { useState, useEffect } from "react";
import { Region } from "./region-controller";
import { getAllRegions, loadRegion } from "./region-service";

function RegionChooser() {
    const [data, setData] = useState<Region[] | null>(null);

/*     useEffect(() => {
        loadRegion("692f2932f563216a7398307a")
            .then((result) => setData(result))
            .catch((error) => console.error("Component error:", error));
    }, []); */

    useEffect(() => {
        getAllRegions()
            .then((result) => setData(result))
            .catch((error) => console.error("Component error:", error));
    }, []);

    return (
        <div>
            {/* <h1>{data?.name}</h1> */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default RegionChooser;