# gm_assistant
Das Projekt wurde initial in Java 17 entwickelt und wurde für die Arbeit mit dem Docker Model Runner auf Java 21 migriert

# Frontend
Das Projekt befindet sich unter **gm_assistant_frontend**.

## Abhängigkeiten installieren
1. `cd gm_assistant_frontend`
2. `npm install`

## Frontend starten
1. `npm start`

Das Frontend ist dann unter http://localhost:3000/ zu erreichen.

# Backend
Das Projekt befindet sich unter **gm_assistant_backend**.

## Abhängigkeiten installieren
1. `gradle build` oder über die IDE

## Backend starten
1. `.\gradlew bootRun` oder über die IDE

Das Backend ist dann unter http://localhost:8080/ zu erreichen.

## API Dokumentation
Die API Dokumentation ist unter http://localhost:8080/swagger-ui/index.html zu erreichen.

## Bruno
Um die APIs zu testen gibt es ein Bruno Projekt unter **bruno/hello**.

# KI
Es gibt drei Möglichkeiten um LLMs mit diesem Projekt zu verbinden. 

1. Docker Model Runner
2. Ollama
3. LM Studio

## Docker Model Runner
In diesem Fall läuft die KI in einem Container.
1. Docker starten
2. Unter http://localhost:12434 zu erreichen
## Ollama
Sobald die Anwendung gestartet wurde ist es standardmäßig unter http://localhost:11434/ zu erreichen.
## LM Studio
1. Anwendung starten
2. Terminal `lms server start`
Die Anwendung ist dann unter http://localhost:1234/api/v0/models zu erreichen.

