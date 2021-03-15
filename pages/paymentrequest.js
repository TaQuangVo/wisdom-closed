
import styleRequest from "../styles/Request.module.css";
import {motion} from "framer-motion"
import {useState, useContext, useRef, useEffect} from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'

//firebase
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage";

//contexts
import {userContext} from "../contexts/userContext"
import {languageContext} from "../contexts/languageContext";


export default function PaymentRequest() {

    //user context
    const {user} = useContext(userContext);
    const  {isEng} = useContext(languageContext);

    const textAlign = isEng ? "left":"right";

    const languageLayout = (Engver, ArbVer) => {
        if(isEng){
            return Engver;
        }else{
            return ArbVer;
        }
    }

    const router = useRouter();


    useEffect(() => {
        if(user !== null){
            if(user.totalCash < 300){
                router.replace("/user");
            }  
        }      
    }, [user])

    //filebase init
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    const storage = firebase.storage();
    const db = firebase.firestore();

    //ref to fileupploader
    let fileUploader = useRef(null)

    //error
    const [error, setError] = useState("");
    const [handlingState, setHandlingState] = useState(0); //0 innit, 1 loading, 2 succes, 3 error,


    const uploadImage = async () => {

        //varify file uppload
        if(fileUploader.files.length === 0){
            return {
                error: true,
                message: "No file found"
            }
        }else if (fileUploader.files > 1){
            return {
                error: true,
                message: "Only one file is allowed"
            }
        }else if (!fileUploader.files[0].type.startsWith('image')){
            return{
                error:true,
                message:"File has to be a image"
            }
        }else if (fileUploader.files[0].size > 1000000){
            return{
                error:true,
                message:"File has to be a smaller than 1Mb"
            }
        }

        //get file extention;
        const filename = fileUploader.files[0].name;
        const filenameSplit = filename.split(".");
        const fileExtention = filenameSplit[filenameSplit.length-1];
        const filePath = `user_id_img/${user.myCode}.${fileExtention}`


        //create ref
        const fileRef = storage.ref(filePath);

        //get file
        const file = fileUploader.files[0];

        //upload file
        const uploading = await fileRef.put(file);

        if(uploading.state === "success"){
            return {
                error:false,
                filePath,
            };
        }else{
            return{
                error:true,
                message:"Something went wrong",
            }
        }

    }


    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [bankAddress, setbankAddress] = useState("");
    const [bankNr, setbankNr] = useState("");
    const [iban, setiban] = useState("");
    const [swift, setswift] = useState("");


    const handleChange = (e) => {

        if(e.target.name === "name"){
            setname(e.target.value);
        }else if (e.target.name === "address"){
            setaddress(e.target.value);
        }else if (e.target.name === "email"){
            setemail(e.target.value);
        }else if (e.target.name === "phone"){
            setphone(e.target.value);
        }else if (e.target.name === "bankAddress"){
            setbankAddress(e.target.value);
        }else if (e.target.name === "bankNr"){
            setbankNr(e.target.value);
        }else if (e.target.name === "iban"){
            setiban(e.target.value);
        }else if (e.target.name === "swift"){
            setswift(e.target.value);
        }

    }

    const handleSubmit= async (e) => {

        setHandlingState(1);
        e.preventDefault();


        if(
            name ==="" || address ==="" || email==="",phone ==="" ||  bankAddress ==="" || bankNr==="" || iban==="" || swift===""
        ){
            setError("All field is required")
            setHandlingState(3)
        }else if (user.myCode ===""){
            setHandlingState(3)
            setError("Something went wrong")
        }else{

        

            const uploadFile = await uploadImage();

            if(!uploadFile.error){

                    const requestData = {
                        name,
                        address,
                        email,
                        phone,
                        bankAddress,
                        bankNr,
                        iban,
                        swift,
                        userId:user.myCode,
                        imagePath:uploadFile.filePath,
                        handled:false,
                        
                    }
            
                    const req = await db.collection("paymentRequest").add(requestData).then(docRef => {
                        console.log("Success " + docRef.id);
                        setError("Success");
                        setHandlingState(2);
                    }).catch(err => {
                        console.log(err)
                        setError("Something went Wrong");
                        setHandlingState(3);
                    })
                
        
            }else{
                setError(uploadFile.message)
                setHandlingState(3)
            }
        }
    }



    return (
        <motion.div 
        className={styleRequest.container}
        exit={{opacity:0}} 
        initial={{opacity:0}} 
        animate={{opacity:1}}
        >
            <div className={styleRequest.content}>

                {user !== null ? (
                    <div className={styleRequest.body}>
                    <div className={styleRequest.discriptions}>
                        {languageLayout(<h1>Request a pay out</h1>,<h1>قم بطلب سحب المال</h1>)}
                        <h2>{Math.round(user.totalCash * 1000)/ 1000}</h2>
                        {languageLayout(<p>Fill out all the fields</p>,<p>قم بملئ المعلومات ادناه</p>)}
                        
                    </div>
                    <span className={styleRequest.divider}></span>
                    <div className={styleRequest.forms}>
                        {
                            handlingState !== 2  && (
                                <form onSubmit={e => handleSubmit(e)} >
                                    <div>
                                        {languageLayout(<h3>Full name</h3>,<h3 className="arabicText">الأسم الكامل</h3>)}
                                        <input style={{textAlign:textAlign}} onChange={e => handleChange(e)} type="text" name="name" autoComplete="off"/>
                                        {languageLayout(<h3>Address</h3>,<h3 className="arabicText">العنوان</h3>)}
                                        <input style={{textAlign:textAlign}} onChange={e => handleChange(e)} type="text" name="address" autoComplete="none"/>
                                        {languageLayout(<h3>Email</h3>,<h3 className="arabicText">البريد الألكتروني</h3>)}
                                        <input style={{textAlign:textAlign}} onChange={e => handleChange(e)} type="text" name="email" autoComplete="none"/>
                                        {languageLayout(<h3>Phone nr</h3>,<h3 className="arabicText">رقم الهاتف</h3>)}
                                        <input style={{textAlign:textAlign}} onChange={e => handleChange(e)} type="text" name="phone" autoComplete="none"/>
                                        {languageLayout(<h3>Name and full address of recipient's bank</h3>,<h3 className="arabicText">اسم البنك والعنوان الكامل له</h3>)}
                                        <input style={{textAlign:textAlign}} onChange={e => handleChange(e)} type="text" name="bankAddress" autoComplete="none"/>
                                        {languageLayout(<h3>Account number and account type</h3>,<h3 className="arabicText">رقم الحساب ونوع الحساب</h3>)}
                                        <input style={{textAlign:textAlign}} onChange={e => handleChange(e)} type="text" name="bankNr" autoComplete="none"/>
                                        {languageLayout(<h3>IBAN</h3>,<h3 className="arabicText">رقم ال IBAN</h3>)}
                                        <input style={{textAlign:textAlign}} onChange={e => handleChange(e)} type="text" name="iban" autoComplete="none"/>
                                        {languageLayout(<h3>SWIFT or BIC code</h3>,<h3 className="arabicText">رمز ال Bic او Swift</h3>)}
                                        <input style={{textAlign:textAlign}} onChange={e => handleChange(e)} type="text" name="swift" autoComplete="none"/>
                                        {languageLayout(<h3>Passport picture</h3>,<h3 className="arabicText">صورة جواز السفر</h3>)}
                                        <input style={{textAlign:textAlign}} ref={el => fileUploader = el} onChange={e => handleChange(e)} type="file" name="pass" autoComplete="none"/>

                                        
                                    
                                        <button type="submit" disabled ={handlingState === 2}>

                                            {handlingState === 1 ? languageLayout("Sending..","يتم الإرسال") : languageLayout("Make the request","قم بالطلب")}

                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 17">
                                                <polygon points="10.3 8.5 1.8 0 0 1.8 6.7 8.5 0 15.2 1.8 17 10.3 8.5"/>
                                            </svg>
                                        </button>
                                        <p className={styleRequest.formOneError}>{error}</p>
                                    </div>                            
                                </form>                 
                            )
                        }
                        {
                            handlingState === 2 && (
                            <div className={styleRequest.success}>
                                <h2>The request has been sent</h2>
                                <p>Back to the <Link href="/user"><span>Dashboard</span></Link></p>
                            </div>
                            )
                        }
                             
                    </div>
                </div>
                ) : (<h1>pleze login</h1>)}
                
            </div>
        </motion.div>
    )
}
 




