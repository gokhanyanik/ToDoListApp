import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase(
  {
    name: "AppDatabase.db",
    location: "default",
  },
  () => console.log("Veritabanı bağlantısı başarılı!"),
  (error) => console.error("Veritabanı bağlantısı başarısız: ", error)
);

// Kullanıcılar tablosunu oluştur
export const createUserTable = (): void => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
      );`,
      [],
      () => console.log("Kullanıcılar tablosu başarıyla oluşturuldu!"),
      (error) => console.error("Kullanıcılar tablosu oluşturulurken hata: ", error)
    );
  });
};

// Yeni kullanıcı ekle
export const addUser = (email: string, password: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO users (email, password) VALUES (?, ?);`,
        [email, password],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

// Kullanıcıyı doğrula
export const validateUser = (
  email: string,
  password: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM users WHERE email = ? AND password = ?;`,
        [email, password],
        (_, results) => {
          if (results.rows.length > 0) {
            resolve(true); // Kullanıcı bulundu
          } else {
            resolve(false); // Kullanıcı bulunamadı
          }
        },
        (_, error) => reject(error)
      );
    });
  });
};




