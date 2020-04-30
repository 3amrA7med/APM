package com.example.apm.repository;

import com.example.apm.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

// Second parameter is the primary key data type
public interface ProductsRepository extends JpaRepository<Product, Long> {

}
