import styleAbout from "../styles/About.module.css";
import {motion} from "framer-motion"



export default function Policy() {
    return (
        <motion.div 
        className={styleAbout.container}
        exit={{opacity:0}} 
        initial={{opacity:0}} 
        animate={{opacity:1}}>
            <div className={styleAbout.content}>
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
                </div>
            </div>
        </motion.div>
    )
}
 