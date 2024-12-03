import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ssi from "../assets/ssiinject.jpg";
import xss from "../assets/xss.jpg";
import rce from "../assets/rce.jpg";
import env from "../assets/env.jpg";
import sql from "../assets/sql.jpg";
function Vulnerabilities() {
  return (
    <>
      <div className="hero bg-base-100 ">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <AnimationOnScroll animateOnce={true} animateIn="fadeInUp">
              <h1 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                [ Vulnerabilities ]
              </h1>
              <p className="py-6 mb-5 ">The way hackers exploit your website</p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className="flex-col justify-center w-full lg:flex lg:flex-row sm:carousel">
        <div animateOnce={true} animateIn="zoomInLeft">
          <Vuln
            title="XSS Attacks"
            desc="Inject malicious scripts into web apps, exploiting vulnerabilities to steal data or hijack sessions.
"
            longdesc="Cross-site scripting (XSS) is a type of security vulnerability typically found in web applications. XSS attacks enable attackers to inject client-side scripts into web pages viewed by other users. A cross-site scripting vulnerability may be used by attackers to bypass access controls such as the same-origin policy. "
            previewImage={xss}
            link="/xss-attacks"
          />
        </div>

        <div className="mx-auto divider lg:divider-horizontal"></div>

        <div animateOnce={true} animateIn="zoomIn">
          <Vuln
            title="SQL INJECTION"
            desc="Compromise databases via unauthorized queries, enabling data manipulation or exposure."
            longdesc="SQL Injection (SQLi) is a type of security vulnerability typically found in web applications that interact with databases. SQLi attacks enable attackers to execute arbitrary SQL queries within the database used by the application. An SQL injection vulnerability may be used by attackers to bypass authentication, extract sensitive data, modify or delete records, and perform administrative operations on the database."
            previewImage={sql}
            link="/sql-injection"
          />
        </div>
        <div className="mx-auto divider lg:divider-horizontal"></div>
        <div animateOnce={true} animateIn="zoomInRight">
          <Vuln
            title="LFI/RFI"
            longdesc="Local File Inclusion (LFI) / Remote File Inclusion (RFI) are types of security vulnerabilities commonly found in web applications. LFI allows attackers to include files from the server's filesystem, while RFI allows the inclusion of files from remote servers. These vulnerabilities may be exploited to execute arbitrary code, disclose sensitive information, or escalate privileges within the server hosting the web application."
            desc="Allow attackers to read local files without relying on environment variables, posing a significant security risk.
"
            previewImage={env}
            link="/file-inclusion-attacks"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center w-full mt-8 mb-6 lg:flex-row">
        <div animateOnce={true} animateIn="zoomInLeft">
          <Vuln
            title="SSI Injection"
            longdesc="Server-Side Includes (SSI) Injection is a type of security vulnerability found in web applications that use SSI directives. SSI injection attacks enable attackers to inject and execute arbitrary SSI directives on the server. This can be used to read sensitive files, execute server-side commands, or modify the content delivered to the client, potentially leading to unauthorized access or data manipulation.

"
            desc="Manipulate server-side includes, potentially leading to unauthorized content insertion.
"
            previewImage={ssi}
            link="/ssi-injection"
          />
        </div>
        <div className="mx-auto divider lg:divider-horizontal"></div>
        <div animateOnce={true} animateIn="zoomInRight">
          <Vuln
            title="RCE"
            longdesc="Remote Code Execution (RCE) is a type of security vulnerability that allows attackers to execute arbitrary code on a remote server. RCE vulnerabilities can be exploited through various means, such as injecting malicious code via web applications or exploiting flaws in software running on the server. Successful exploitation of RCE can lead to complete control over the affected system, allowing attackers to steal data, disrupt services, or deploy malware."
            desc="Enables execution of arbitrary commands on a remote host, granting full control of the webserver.
"
            previewImage={rce}
            link="/remote-code-execution"
          />
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Vulnerabilities;
function Vuln(props) {
  return (
    <>
      <AnimationOnScroll animateIn="zoomIn" animateOnce={true}>
        <div class="  mx-auto flex w-80 md:w-96 flex-col rounded-2xl bg-[#282C32] shadow-xl h-auto hover:bg-[#374151] transition duration-150 hover:scale-90 hover:opacity-75 group">
          <figure class="flex items-center justify-center rounded-2xl">
            <img
              src={props.previewImage}
              alt="Card Preview"
              class="rounded-t-xl h-52"
            />
          </figure>
          <div class="flex flex-col p-8">
            <div class="pb-6 text-2xl font-bold uppercase text-slate-100">
              {props.title}
            </div>
            <div class="text-lg text-slate-200">{props.desc}</div>
            <div class="flex justify-end pt-6">
              <a
                href={props.link}
                target="_blank"
                class="text-center w-full transform rounded-lg   bg-[#32995A]   p-3 text-base font-bold text-slate-100 transition hover:bg-opacity-85 active:scale-95 group-hover:scale-100 group-hover:bg-[#3ec672] group-hover:shadow-xl group-hover:shadow-slate-600 group-hover:text-slate-50  delay-50"
              >
                Continue Reading
              </a>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </>
  );
}
