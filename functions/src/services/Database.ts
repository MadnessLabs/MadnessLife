/**
 * A simple wrapper around Firebase Firestore
 * RESOURCES: https://firebase.google.com/docs/firestore/quickstart
 */
import * as admin from "firebase-admin";
import * as fs from "fs";

declare interface DatabaseServiceOptions {
  /**
   * Is the service being run locally
   */
  local?: boolean;
  /**
   * The ID of the Firebase project
   */
  project?: string;
}

export class DatabaseService {
  private service: admin.firestore.Firestore;

  constructor(options: DatabaseServiceOptions = {}) {
    if (admin.apps.length === 0) {
      this.connect({
        local: options.local ? options.local : false,
        project: options.project ? options.project : null
      });
    }
    this.service = admin.firestore();
  }

  /**
   * Initialize database connection
   * @param options Connection options
   */
  connect(options: DatabaseServiceOptions) {
    const serviceAccountFile = options.local
      ? process.cwd() + "/serviceAccountKey.json"
      : process.cwd() + "/serviceAccountKey.live.json";

    const serviceAccountKey = JSON.parse(
      fs.readFileSync(serviceAccountFile, "utf8")
    );

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountKey),
      databaseURL: `https://${options.project}.firebaseio.com`,
      storageBucket: `${options.project}.appspot.com`
    });
  }

  /**
   * Get an object of all the documents in a collection
   * @param collectionName The name of the Firebase collection being queried
   */
  async all(collectionName: string): Promise<any> {
    const collection = await this.getCollection(collectionName);
    const data = {};

    await Promise.all(
      collection.docs.map(async doc => {
        data[doc.id] = { ...doc.data(), id: doc.id };
        return;
      })
    );

    return data;
  }

  /**
   * Get an array of all the documents in a collection
   * @param collectionName The name of the Firebase collection being queried
   */
  async list(collectionName: string): Promise<any[]> {
    const collection = await this.getCollection(collectionName);
    const data = [];

    await Promise.all(
      collection.docs.map(async doc => {
        data.push({ ...doc.data(), id: doc.id });
        return true;
      })
    );

    return data;
  }

  /**
   * Add a document to a collection in the database
   * @param collectionName The name of the Firebase collection being queried
   * @param data An object of what is being added to the database
   * @param id (Optional) ID of the document
   */
  async add(
    collectionName: string,
    data: any,
    id?: string | string
  ): Promise<{ id: string }> {
    const document = await this.collection(collectionName);

    const ref: any = id
      ? await document.doc(id).set(data)
      : await document.add(data);

    return { id: id ? id : ref.id };
  }

  /**
   * Get a collection reference from the database
   * @param collectionName The name of the Firebase collection being queried
   */
  collection(collectionName: string): FirebaseFirestore.CollectionReference {
    return this.service.collection(collectionName);
  }

  /**
   * Delete a document from the database
   * @param collectionName The name of the Firebase collection being queried
   * @param id The id of the document to delete
   */
  delete(
    collectionName: string,
    id: string
  ): Promise<FirebaseFirestore.WriteResult> {
    return this.collection(collectionName)
      .doc(id)
      .delete();
  }

  /**
   * Get a document reference from the database
   * @param collectionName The name of the Firebase collection being queried
   * @param id The id of the document to get reference for
   */
  document(
    collectionName: string,
    id: string
  ): FirebaseFirestore.DocumentReference {
    return this.collection(collectionName).doc(id);
  }

  /**
   * Get a collection from the database
   * @param collectionName The name of the Firebase collection being queried
   */
  getCollection(
    collectionName: string
  ): Promise<FirebaseFirestore.QuerySnapshot> {
    return this.collection(collectionName).get();
  }

  /**
   * Get a document from the database
   * @param collectionName The name of the Firebase collection being queried
   * @param id The id of the document to get
   */
  getDocument(
    collectionName: string,
    id: string
  ): Promise<FirebaseFirestore.DocumentSnapshot> {
    return this.collection(collectionName)
      .doc(id)
      .get();
  }

  /**
   * Get a document's data with it's id as an object
   * @param collectionName The name of the Firebase collection being queried
   * @param id The id of the document to get
   */
  async find(collectionName: string, id: string): Promise<any> {
    const document = await this.getDocument(collectionName, id);

    return document.exists ? { ...document.data(), id: document.id } : null;
  }

  /**
   * Get a document's data as an object
   * @param collectionName The name of the Firebase collection being queried
   * @param id The id of the document to get
   */
  async findDocument(collectionName: string, id: string): Promise<any> {
    const document = await this.getDocument(collectionName, id);

    return document.exists ? { ...document.data() } : null;
  }

  /**
   * Set a document's data
   * NOTE: Any existing data is overwritten
   * @param collectionName The name of the Fireabse collection being queried
   * @param id The id of the document to set
   * @param data An object of what is being set in the database
   */
  async set(
    collectionName: string,
    id: string,
    data: any
  ): Promise<FirebaseFirestore.WriteResult> {
    const document = await this.collection(collectionName).doc(id);

    return document.set(data);
  }

  /**
   * Update's a document's data
   * NOTE: This will merge the current data with data param object
   * @param collectionName The name of the Fireabse collection being queried
   * @param id The id of the document to updated
   * @param data An object of what is being updated in the database
   */
  async update(
    collectionName: string,
    id: string,
    data: any
  ): Promise<FirebaseFirestore.WriteResult> {
    const document = await this.collection(collectionName).doc(id);

    return document.set(data, { merge: true });
  }
}
