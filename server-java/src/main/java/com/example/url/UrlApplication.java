package com.example.url;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

@SpringBootApplication
public class UrlApplication {

	public static void main(String[] args) {
		firebaseInit();
		SpringApplication.run(UrlApplication.class, args);
	}

	public static void firebaseInit() {
		FileInputStream serviceAccount =
				null;
		try {
			serviceAccount = new FileInputStream("src/main/resources/serviceAccountKey.json");
			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(serviceAccount))
					.setProjectId("url-shortener-5b856")
					.build();

			FirebaseApp.initializeApp(options);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}


	}
}
