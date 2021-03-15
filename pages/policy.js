import styleAbout from "../styles/About.module.css";
import {motion} from "framer-motion"
import {useContext} from 'react'

import {languageContext} from "../contexts/languageContext";



export default function Policy() {

    const  {isEng, changeLanguage} = useContext(languageContext);

    const languageLayout = (Engver, ArbVer) => {
        if(isEng){
            return Engver;
        }else{
            return ArbVer;
        }
    }

    return (
        <motion.div 
        className={styleAbout.container}
        exit={{opacity:0}} 
        initial={{opacity:0}} 
        animate={{opacity:1}}>
            <div className={styleAbout.content}>
                {languageLayout(
                    <div className={styleAbout.body}>
                    <h1>TERMS OF SERVICE</h1>
                    <h2>OVERVIEW</h2>
                    <p>This website is operated by WIZZDOM.NET. Throughout the site, the terms “we”, “us” and “our” refer to WIZZDOM.NET. WIZZDOM.NET offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
                    <p>By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
                    <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
                    <p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>
                    <h2>INTELLECTUAL PROPERTY RIGHTS</h2>
                    <p>Other than the content you own, under these Terms, WIZZDOM.NET and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>
                    <h2>SECTION 1 - ONLINE STORE TERMS</h2>
                    <p>- By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.<br/>- You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).<br/>- You must not transmit any worms or viruses or any code of a destructive nature.</p>
                    <h2>SECTION 2 - GENERAL CONDITIONS</h2>
                    <p>We reserve the right to refuse service to anyone for any reason at any time.<br/>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.<br/>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.</p>
                    <h2>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h2>
                    <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.<br/>- This Website is provided “as is,” with all faults, and WIZZDOM.NET express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>
                    <h2>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</h2>
                    <p>Prices for our products are subject to change without notice.<br/>- We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.<br/>- We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
                    <h2>SECTION 5 - Limitation of liability and Indemnification</h2>
                    <p>In no event shall WIZZDOM.NET, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  WIZZDOM.NET, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.<br/>- You hereby fully indemnify WIZZDOM.NET from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>
                    <h2>SECTION 6 - RESTRICTIONS</h2>
                    <p>You are specifically restricted from all the following:<br/>- Selling or sublicensing   any Website material;<br/>- Using this Website in any way that is or may be damaging to this Website;<br/>- Using this Website in any way that impacts user access to this Website;<br/>- Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;<br/>- Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;<br/>- Using this Website to engage in any advertising or marketing.<br/>- Certain areas of this Website are restricted from being access by you and WIZZDOM.NET may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p>
                </div>,




                <div className={[styleAbout.body, "arabicText"].join(" ")} >
                <h1>شروط الخدمة</h1>
                <h2>نظرة عامة</h2>
                <p>
                يتم تشغيل هذا الموقع بواسطة WIZZDOM.NET.في جميع أنحاء الموقع، تشير المصطلحات "نحن" و "خاصتنا" إلى
                WIZZDOM.NET. <br/> WIZZDOM.NET تتيح لك جميع المعلومات والأدوات والخدمات، كمستخدم في هذا الموقع ، بشرط موافقتك على جميع الشروط
                والأحكام والسياسات والإشعارات المذكورة هنا.
                </p>
                <p>من خلال زيارة موقعنا و / أو شراء شيء منا، فإنك تشارك في &quot;الخدمة&quot; الخاصة بنا وتوافق على الالتزام بالشروط والأحكام التالية
                (&quot;شروط الخدمة&quot;، &quot;الشروط&quot;) ، بما في ذلك تلك الشروط والأحكام والسياسات الإضافية المشار إليه هنا و / أو متاح من خلال ارتباط
                تشعبي. تنطبق شروط الخدمة هذه على جميع مستخدمي الموقع، بما في ذلك على سبيل المثال لا الحصر المستخدمين من المتصفحات و
                / أو البائعين و / أو العملاء و / أو التجار و / أو المساهمين في المحتوى.</p>
                <p>يرجى قراءة شروط الخدمة هذه بعناية قبل الوصول إلى موقعنا الإلكتروني أو استخدامه. من خلال الوصول إلى أو استخدام أي جزء
                من الموقع، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على جميع شروط وأحكام هذه الاتفاقية، فلا يجوز لك
                الوصول إلى موقع الويب أو استخدام أي من خدماته. إذا كانت شروط الخدمة هذه بمثابة عرض، فإن القبول يقتصر صراحةً على
                شروط الخدمة هذه.</p>
                <p>تخضع أيضًا أي ميزات أو أدوات جديدة تضاف إلى المتجر الحالي لشروط الخدمة. يمكنك مراجعة أحدث إصدار من شروط الخدمة في
                أي وقت على هذه الصفحة. نحتفظ بالحق في تحديث أو تغيير أو استبدال أي جزء من شروط الخدمة هذه عن طريق نشر التحديثات و /
                أو التغييرات على موقعنا. تقع على عاتقك مسؤولية مراجعة هذه الصفحة بشكل دوري لمعرفة التغييرات. استمرار استخدامك أو   
                الوصول إلى موقع الويب بعد نشر أي تغييرات يشكل قبولًا لهذه التغييرات.</p>
                <h2>حقوق الملكية الفكرية</h2>
                <p>بخلاف المحتوى الذي تمتلكه، بموجب هذه الشروط، تمتلك WIZZDOM.NET و/ أو المرخصون التابعون لها جميع حقوق الملكية
                الفكرية والمواد الواردة في هذا الموقع.</p>
                <h2>القسم 1 - شروط المتجر عبر الإنترنت</h2>
                <p>بالموافقة على شروط الخدمة هذه، فإنك تقر بأنك على الأقل تبلغ سن الرشد في الولاية أو الإقليم الذي تعيش فيه، أو أنك تبلغ سن الرشد
                في الولاية أو الإقليم الذي تعيش فيه وأنك منحتنا موافقتك على السماح لأي من المعالين القصر لاستخدام هذا الموقع.<br/>لا يجوز لك استخدام منتجاتنا لأي غرض غير قانوني أو غير مصرح به ولا يجوز لك، عند استخدام الخدمة، انتهاك أي قوانين في
                ولايتك القضائية (بما في ذلك على سبيل المثال لا الحصر قوانين حقوق النشر).<br/>يجب ألا تنقل أي فيروسات أو أي رمز ذي طبيعة مدمرة.</p>
                <h2>القسم 2 - الشروط العامة</h2>
                <p>نحتفظ بالحق في رفض الخدمة لأي شخص لأي سبب وفي أي وقت.<br/>أنت تدرك أن المحتوى الخاص بك (لا يشمل معلومات بطاقة الائتمان)، قد يتم نقله بدون تشفير ويتضمن (أ) عمليات نقل عبر شبكات
                مختلفة؛ و (ب) التغييرات للتوافق والتكيف مع المتطلبات الفنية لتوصيل الشبكات أو الأجهزة. يتم دائمًا تشفير معلومات بطاقة الائتمان
                أثناء النقل عبر الشبكات.<br/>أنت توافق على عدم إعادة إنتاج أو تكرار أو نسخ أو بيع أو إعادة بيع أو استغلال أي جزء من الخدمة أو استخدام الخدمة أو الوصول إلى
                الخدمة أو أي جهة اتصال على الموقع الإلكتروني يتم تقديم الخدمة من خلالها، دون إذن كتابي صريح من جانبنا.</p>
                <h2>القسم 3 - دقة المعلومات واكتمالها وحداثتها</h2>
                <p>نحن لسنا مسؤولين إذا كانت المعلومات المتوفرة على هذا الموقع غير دقيقة أو كاملة أو حديثة. يتم توفير المواد الموجودة على هذا
                الموقع للحصول على معلومات عامة فقط ولا ينبغي الاعتماد عليها أو استخدامها كأساس وحيد لاتخاذ القرارات دون استشارة مصادر
                المعلومات الأولية أو الأكثر دقة أو الأكثر اكتمالًا أو في الوقت المناسب. أي اعتماد على المواد الموجودة على هذا الموقع هو على
                مسؤوليتك الخاصة.<br/>يتم توفير موقع الويب هذا &quot;كما هو&quot; مع جميع الأخطاء، ولا تعبر WIZZDOM.NET عن أي تعهدات أو ضمانات من أي نوع يتعلق
                بهذا الموقع أو المواد الموجودة على هذا الموقع. أيضًا، لن يتم تفسير أي شيء وارد في هذا الموقع على أنه نصح لك.</p>
                <h2>القسم 4 - تعديلات على الخدمة والأسعار</h2>
                <p>أسعار منتجاتنا عرضة للتغيير دون إشعار.<br/>نحن نحتفظ بالحق في أي وقت في تعديل أو إيقاف الخدمة (أو أي جزء أو محتوى منها) دون إشعار في أي وقت.<br/>لن نكون مسؤولين تجاهك أو تجاه أي طرف ثالث عن أي تعديل أو تغيير في الأسعار أو تعليق أو وقف للخدمة.</p>
                <h2>القسم 5 - تحديد المسؤولية والتعويض</h2>
                <p>لن تتحمل WIZZDOM.NET بأي حال من الأحوال، ولا أي من مسؤوليها ومديريها وموظفيها، المسؤولية عن أي شيء ينشأ عن أو
                يرتبط بأي شكل من الأشكال باستخدامك لهذا الموقع. لا تتحمل WIZZDOM.NET، بما في ذلك مسؤوليها ومديريها وموظفيها، أي
                مسؤولية غير مباشرة أو تبعية أو خاصة تنشأ عن أو تتعلق بأي شكل من الأشكال باستخدامك لهذا الموقع.<br/>أنت بموجب هذا تعوض WIZZDOM.NET بالكامل من وضد أي و / أو جميع الالتزامات والتكاليف والمطالب وأسباب الدعوى
                والأضرار والنفقات الناشئة بأي شكل من الأشكال فيما يتعلق بخرقك لأي من أحكام هذه الشروط.</p>
                <h2>القسم 6 - القيود</h2>
                <p>أنت مقيد على وجه التحديد من كل ما يلي:<br/>بيع أو ترخيص أي مادة من مواد الموقع؛<br/>استخدام هذا الموقع بأي طريقة تضر أو ​​قد تكون ضارة بهذا الموقع؛<br/>استخدام هذا الموقع بأي طريقة تؤثر على وصول المستخدم إلى هذا الموقع؛<br/>استخدام هذا الموقع بشكل مخالف للقوانين واللوائح المعمول بها، أو بأي شكل من الأشكال قد يتسبب في ضرر للموقع، أو لأي شخص
                أو كيان تجاري؛<br/>الانخراط في أي تنقيب عن البيانات أو جمع البيانات أو استخراج البيانات أو أي نشاط مشابه آخر فيما يتعلق بهذا الموقع؛<br/>استخدام هذا الموقع للدخول في أي إعلان أو تسويق.<br/>يُحظر وصولك إلى مناطق معينة من هذا الموقع، وقد تقوم WIZZDOM.NET بتقييد وصولك إلى أي مناطق من هذا الموقع، في أي
                وقت، وفقًا لتقديرها المطلق. يعتبر أي معرف مستخدم وكلمة مرور قد يكون لديك لهذا الموقع سريًا ويجب عليك الحفاظ على السرية
                أيضًا.</p>
            </div>
                )}
            </div>
        </motion.div>
    )
}
 