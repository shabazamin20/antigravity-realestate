package com.realestate.model;

import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "projects")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Project name is required")
    @Column(nullable = false)
    private String name;

    private String nameAr;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(columnDefinition = "TEXT")
    private String descriptionAr;

    @NotBlank(message = "Location is required")
    @Column(nullable = false)
    private String location;

    private String locationAr;

    @NotBlank(message = "Status is required")
    @Column(nullable = false)
    private String status;

    private String imageUrl;
}
