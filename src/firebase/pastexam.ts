import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { PastExamData } from "../types.ts/PastExamData";
import { db, storage } from "./init";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const onUploadPastExam = async (data: PastExamData) => {
  try {
    const collectionRef = collection(db, "subjectNameList");
    const documentRef = doc(db, "pastexams", data.subjectName);
    const subCollectionRef = collection(documentRef, data.subjectName);

    // ファイルをFirebase Storageにアップロード
    if (data.file) {
      const storageRef = ref(storage, `pastexams/${data.file[0].name}`);
      await uploadBytes(storageRef, data.file[0]);
      const downloadURL = await getDownloadURL(storageRef);

      await addDoc(subCollectionRef, {
        subjectName: data.subjectName,
        teacherName: data.teacherName,
        createdYear: data.createdYear,
        fileUrl: downloadURL,
      });
    }

    const documentsQuery = query(
      collectionRef,
      where("subjectName", "==", data.subjectName)
    );
    const querySnapshot = await getDocs(documentsQuery);

    if (querySnapshot.empty) {
      await addDoc(collectionRef, {
        subjectName: data.subjectName,
      });
    }
  } catch (error) {
    alert(`過去問の投稿に失敗しました。${error}`);
  }
};

export const getSubjectNameList = async (): Promise<string[]> => {
  try {
    const collectionRef = collection(db, "subjectNameList");
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => doc.data().subjectName);
  } catch (error) {
    alert(`教科名の取得に失敗しました。${error}`);
    return [];
  }
};

export const getPastExamList = async (
  subjectName: string
): Promise<PastExamData[]> => {
  try {
    const documentRef = doc(db, "pastexams", subjectName);
    const collectionRef = collection(documentRef, subjectName);
    const snapshot = await getDocs(collectionRef);
    const data: PastExamData[] = snapshot.docs.map(
      (doc) => doc.data() as PastExamData
    );
    return data;
  } catch (error) {
    alert(`過去問の取得に失敗しました。${error}`);
    return [];
  }
};
