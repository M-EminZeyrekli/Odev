package com.medeniyet.proje;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin
public class ProjeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjeApplication.class, args);
	}

	@GetMapping
	public String hello() {
		String msg = "hello";
		return msg;
	}

}
