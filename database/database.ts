import SQLite from "react-native-sqlite-storage";
import { setTodos } from "../redux/todoSlice";
//veritabanı bağlantısı açılır
const db = SQLite.openDatabase(
  {
    name: "AppDatabase.db",
    location: "default",
  },
/*  */() => console.log("Veritabani bağlantisi başarili!"),
  (error) => console.error("Veritabani bağlantisi başarisiz: ", error)
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
      () => console.log("Kullanicilar tablosu başariyla oluşturuldu!"),
      (error) => console.error("Kullanicilar tablosu oluşturulurken hata: ", error)
    );
  });
};


export const createTodoTable = (): void => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT ,
        description TEXT,
        deadline TEXT
      );`,
      [],
      () => console.log("Todo tablosu başariyla oluşturuldu!"),
      (error) => console.error("todo tablosu oluşturulurken hata: ", error)
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
// Yeni todo ekle
export const addTodo = (title: string, description: string, deadline: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO todos (title,description,deadline) VALUES ( ?,?,?);`,
        [title, description, deadline],
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




// Tüm To-Do'ları okuma
export const getTodos = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM todos;`,
        [],
        (_, result) => {
          if (result.rows.length > 0){
            resolve(result.rows.raw());  // Sqlite in içindeki verileri alıyoruz
          } else{
            resolve([]);// eğer veri yoksa boş dizi dön 
          }
        },
        (_, error) => {
          console.log("SQlite Hatası : ",error);
          reject(error);
        }
      );
    });
  });
};






