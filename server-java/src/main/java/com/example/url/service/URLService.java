package com.example.url.service;

import com.example.url.entity.URL;
import com.google.api.core.ApiFuture;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.json.*;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import org.json.simple.parser.JSONParser;

import java.io.*;
import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class URLService {

    public URL createURL(URL url) {
        String uuid = UUID.randomUUID().toString().replace("-", "").substring(0, 10);
        url.setNewURL("http://localhost:8080/" + uuid);
        url.setDateCreated(Timestamp.now());

        Firestore db = FirestoreClient.getFirestore();
        db.collection("URL").document(uuid).set(url);
        return url;
    }

    public String deleteURL(String id) {
        try {
            Firestore db = FirestoreClient.getFirestore();
            DocumentReference docRef = db.collection("URL").document(id);
            ApiFuture<DocumentSnapshot> future = docRef.get();
            DocumentSnapshot document = future.get();
            if(document.exists()) {
                db.collection("URL").document(id).delete();
            }
            else {
                return "URL not found";
            }
        } catch (ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        return "Deleted URL with id: " + id;
    }

    public URL updateURL(String id, URL url) {
        url.setDateModified(Timestamp.now());
        Firestore db = FirestoreClient.getFirestore();
        db.collection("URL").document(id).set(url);
        return url;
    }

    public List<URL> getAllURL() {
        return null;
    }

    public URL getURLById(String id) {

        try {
            Firestore db = FirestoreClient.getFirestore();
            DocumentReference docRef = db.collection("URL").document(id);
            ApiFuture<DocumentSnapshot> future = docRef.get();
            DocumentSnapshot document = future.get();
            if(document.exists()) {
                return document.toObject(URL.class);
            }
        } catch (ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }
        return null;
    }

    public String getBaseUrl() {
        try {
            JSONParser parser = new JSONParser();
            JSONArray jsonArray = (JSONArray) parser.parse(new FileReader(
                    "src/main/resources/static/domainSetting.json"));

            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject jsonObject = jsonArray.getJSONObject(i);
                if (jsonObject.toString().equals("host_name")) {
                    return jsonObject.getString("host_name");
                }
            }

        } catch (IOException | ParseException | JSONException e) {
            throw new RuntimeException(e);
        }
        return "not found";
    }
}
