package com.cognizant.spring_data_jpa_quick_example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.spring_data_jpa_quick_example.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

}