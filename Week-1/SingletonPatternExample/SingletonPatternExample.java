class Logger {
    private static Logger instance;

    private Logger() {
    }

    public static Logger getInstance() {
        if (instance == null)
            instance = new Logger();
        return instance;
    }

    void log(String msg) {
        System.out.println(msg);
    }
}

public class SingletonPatternExample {
    public static void main(String[] args) {
        Logger l1 = Logger.getInstance();
        Logger l2 = Logger.getInstance();

        l1.log("Hello");
        System.out.println(l1 == l2);
    }
}