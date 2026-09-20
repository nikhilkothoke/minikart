package com.minikart.minikart.controller;

import com.minikart.minikart.entity.Product;
import com.minikart.minikart.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/api/products")
    public List<Product> getProducts() {
        return productService.getAllProducts();

    }
    @PostMapping("/api/products")
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }
}
