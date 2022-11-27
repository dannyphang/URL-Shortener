package com.example.url;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UrlApplication {

	public static void main(String[] args) {
		FirebaseSetting firebaseSetting = new FirebaseSetting();
		firebaseSetting.firebaseInit();
		SpringApplication.run(UrlApplication.class, args);
	}

}
