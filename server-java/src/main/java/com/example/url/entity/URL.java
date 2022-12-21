package com.example.url.entity;

import com.google.cloud.Timestamp;

public class URL {
    private String oriURL;
    private String newURL;
    private Timestamp dateCreated;
    private Timestamp dateModified;
    private String title;
    private int visitedCount;
    private String IP;

    public URL() {

    }

    public URL(String oriURL, String newURL, Timestamp dateCreated, Timestamp dateModified, String title, int visitedCount, String IP) {
        this.oriURL = oriURL;
        this.newURL = newURL;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
        this.title = title;
        this.visitedCount = visitedCount;
        this.IP = IP;
    }

    public String getOriURL() {
        return oriURL;
    }

    public void setOriURL(String oriURL) {
        this.oriURL = oriURL;
    }

    public String getNewURL() {
        return newURL;
    }

    public void setNewURL(String newURL) {
        this.newURL = newURL;
    }

    public Timestamp getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Timestamp dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Timestamp getDateModified() {
        return dateModified;
    }

    public void setDateModified(Timestamp dateModified) {
        this.dateModified = dateModified;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getVisitedCount() {
        return visitedCount;
    }

    public void setVisitedCount(int visitedCount) {
        this.visitedCount = visitedCount;
    }

    public String getIP() {
        return IP;
    }

    public void setIP(String IP) {
        this.IP = IP;
    }
}
