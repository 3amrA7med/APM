package com.example.apm.repository;

import com.example.apm.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

// Second parameter is the primary key data type
@RepositoryRestResource(collectionResourceRel = "products", path="product")
public interface ProductsRepository extends JpaRepository<Product, Long> {

}
