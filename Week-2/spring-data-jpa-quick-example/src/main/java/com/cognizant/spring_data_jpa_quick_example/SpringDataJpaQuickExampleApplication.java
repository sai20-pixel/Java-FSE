package com.cognizant.spring_data_jpa_quick_example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.cognizant.spring_data_jpa_quick_example.service.CountryService;

@SpringBootApplication
public class SpringDataJpaQuickExampleApplication {

	@Autowired
	private CountryService countryService;

	public static void main(String[] args) {
		SpringApplication.run(SpringDataJpaQuickExampleApplication.class, args);
	}

	@Bean
	CommandLineRunner run() {
		return args -> {
			System.out.println(countryService.getAllCountries());
		};
	}
}