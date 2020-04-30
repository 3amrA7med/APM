package com.example.apm.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="apm_products", schema = "apm-dev")
@Setter
@Getter
@ToString
public class Product {


    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "productId")
    private long productId;
    @Column(name = "productName")
    private String productName;
    @Column(name = "productCode")
    private String productCode;
    @Column(name = "releaseDate")
    private String releaseDate;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private float price;
    @Column(name = "starRating")
    private float starRating;
    @Column(name = "imageUrl")
    private String imageUrl;

    //Setters and Getters.
    public Long getId() {
        return this.productId;
    }

    public void setId(Long id) {
        this.productId = id;
    }

    public String getProductName() {
        return this.productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    public String getProductCode() {
        return this.productCode;
    }
    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }
    public String getReleaseDate() {
        return this.releaseDate;
    }
    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }
    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getPrice() {
        return this.price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
    public float getStarRating() {
        return this.starRating;
    }

    public void setStarRating(float starRating) {
        this.starRating = starRating;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

}