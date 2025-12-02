package de.ochota.gm_assistant_backend.controller;

import de.ochota.gm_assistant_backend.model.Region;
import de.ochota.gm_assistant_backend.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/region")
public class RegionController {

    @Autowired
    private RegionService regionService;

    @GetMapping("/find/{id}")
    public Region getById(@PathVariable String id) {
        return regionService.getRegionById(id);
    }

//    @PostMapping("/insert")
//    public Product insertProduct(@RequestBody Product product) {
//        return productService.insertProduct(product);
//    }
//
//    @PutMapping("/update/{id}")
//    public Product insertProduct(@PathVariable int id, @RequestBody Product product) {
//        return productService.updateProduct(id, product);
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public void insertProduct(@PathVariable int id) {
//        productService.deleteProduct(id);
//    }
}
