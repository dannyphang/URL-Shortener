package com.example.url;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class FirebaseSetting {
    public void firebaseInit() {

        ClassLoader classloader = FirebaseSetting.class.getClassLoader();

        FileInputStream serviceAccount = null;
        File file = new File(classloader.getResource("serviceAccountKey.json").getFile());
        try {
            serviceAccount = new FileInputStream(file.getAbsoluteFile());
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }

        FirebaseOptions options = null;
        try {
            options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
//                    .setDatabaseUrl("https://url-shortener-1c0f5.firebaseio.com")
                    .build();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        FirebaseApp.initializeApp(options);

    }
}
