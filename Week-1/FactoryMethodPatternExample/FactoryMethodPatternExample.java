interface Document {
    void open();
}

class WordDocument implements Document {
    public void open() {
        System.out.println("Word Document Opened");
    }
}

class PdfDocument implements Document {
    public void open() {
        System.out.println("PDF Document Opened");
    }
}

abstract class DocumentFactory {
    abstract Document createDocument();
}

class PdfFactory extends DocumentFactory {
    Document createDocument() {
        return new PdfDocument();
    }
}

public class FactoryMethodPatternExample {
    public static void main(String[] args) {
        DocumentFactory factory = new PdfFactory();
        Document doc = factory.createDocument();
        doc.open();
    }
}