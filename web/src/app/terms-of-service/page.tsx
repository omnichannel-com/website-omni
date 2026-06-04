import type { Metadata } from "next";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the omnichannel CX Terms of Service. These terms govern your subscription and use of our platform.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfService() {
  return (
    <StickyScrollLayout>
      
        <div className="flex flex-col justify-center py-12">

        <h1 className="gradient-text xl:text-[54px] text-[25px] md:text-[35px] font-semibold font-display text-center my-12">
        Terms of Service
        </h1>

        <div className="container text-ocx-fg font-body flex flex-col gap-12">
            <div>
                <p className="text-lg font-normal">These terms and conditions (Terms) govern your membership with omnichannel CX, a product described on our Website here www.omnichannel.cx (Subscription). Your Subscription is for the tiered package as selected by you and agreed between us by means of the Website (Subscription Tier).
<br/>By clicking the tick box below, paying for your Subscription or otherwise accepting the benefit of any part of the Solution, you agree to be bound by these Terms which form a binding contractual agreement between you or the company you represent (the ‘Client’, or ‘you’) and omnichannel CX Pty Ltd an Australian business with ABN 18 665 527 480 trading as omnichannel CX (‘omnichannel CX, ‘our’, ‘we’ or ‘us’). You represent and warrant that you have valid authority to enter into these Terms on behalf of any entity you may represent.
<br/>We may change these Terms at any time by notifying you, and your continued use of the Solution following such an update will represent an agreement by you to be bound by the Terms as amended.
<br/>In these Terms, capitalised words and phrases have the meanings given to them where they are followed by bolded brackets, or as set out in the Definitions table at the end of these Terms. 
<br/>Please read these terms and conditions carefully before agreeing to proceed with your Subscription. 
<br/><br/>
                </p>
            </div>
            <div>
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4">
        <span className="pr-4">1</span>THE SOLUTION
      </h2>
      <div className="text-lg font-normal space-y-4">
        <h3 className="text-xl font-semibold">1.1 ORDER</h3>
        <p>
          <strong>(a)</strong> By submitting an order for the purchase of a Subscription on the Website, or by responding to a quote from us, indicating that you would like us to provide any goods, software or services to you, including Additional Services (Order), you represent and warrant that:
        </p>
        <p>
          <strong>(i)</strong> you have the legal capacity and are of sufficient age to enter into a binding contract with us; and
        </p>
        <p>
          <strong>(ii)</strong> you are authorised to use the debit or credit card you provide with your Order.
        </p>
        <p>
          <strong>(b)</strong> Submitting or agreeing to an Order constitutes your offer to enter into these Terms.
        </p>
      </div>
    </div>
    <div>
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4">
        <span className="pr-4">1.2</span>YOUR SUBSCRIPTION AND THE SOLUTION
      </h2>
      <div className="text-lg font-normal space-y-4">
        <h3 className="text-xl font-semibold">1.2 YOUR SUBSCRIPTION AND THE SOLUTION</h3>
        <p>
          <strong>(a)</strong> The Solution includes the Software, the Hosted Services, the Support Services and any agreed Additional Services, to the extent described in your Subscription Tier.
        </p>
        <p>
          <strong>(b)</strong> Your Subscription includes the benefits and limitations of your Subscription Tier as set out on our Website and in your Order (as may be amended from time to time by notice to you).
        </p>
        <p>
          <strong>(c)</strong> Your Subscription will commence on the date we make the Solution available to you (subject to you paying our Fees), and will continue for the Subscription Period, unless terminated earlier in accordance with these Terms.
        </p>
      </div>

      <div className="text-lg font-normal space-y-4">
        <h3 className="text-xl font-semibold">1.3 ACCOUNTS</h3>
        <p>
          <strong>(a)</strong> To submit an Order or to use the Solution, you may be required to sign-up, register and receive an account through the Website (an Account).
        </p>
        <p>
          <strong>(b)</strong> As part of the Account registration process and as part of your continued use of the Website, you may be required to provide personal information and details, such as your email address, first and last name, preferred username, a secure password, billing, postal and physical addresses, mobile phone number, photos and video, audio files, profile information, payment details, ratings and reviews, verified identifications, verified certifications and authentication, and other information as determined by us from time to time.
        </p>
        <p>
          <strong>(c)</strong> You warrant that any information you give to us in the course of completing the Account registration process will always be accurate, honest, correct and up-to-date.
        </p>
        <p>
          <strong>(d)</strong> Once you complete the Account registration process, we may, in our absolute discretion, choose to accept you as a registered user within the Website and provide you with an Account.
        </p>
        <p>
          <strong>(e)</strong> We may, in our absolute discretion, suspend or cancel your Account for any reason, including for any failure by you to comply with these Terms.
        </p>
      </div>

      <div className="text-lg font-normal space-y-4">
        <h3 className="text-xl font-semibold">1.4 THE SOFTWARE</h3>
        <p>
          <strong>(a)</strong> During the Subscription Period, we grant to you a non-exclusive, non-transferable licence to use the Software and Documentation for the Number of Solution Uses. If your Subscription Tier on the Website does not specify a Number of Solution Uses, your licence to use the Solution under this clause will be limited to one (1) use (the Number of Solution Uses will be one (1)).
        </p>
        <p>
          <strong>(b)</strong> We may from time to time, in our absolute discretion, release enhancements to the Software, where “Enhancements” means any upgraded, improved, modified or new versions of the Software. Any Enhancements to the Software will not limit or otherwise affect these Terms. Enhancements may cause downtime or delays from time to time, and credits will not be provided for such downtime.
        </p>
        <p>
          <strong>(c)</strong> We will provide the Software in accordance with all applicable Laws and industry standards.
        </p>
      </div>
    </div>

    <div>
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4">
        <span className="pr-4">2</span>SERVICES
      </h2>

      <h3 className="text-xl font-semibold">2.1 SERVICES</h3>
      <div className="text-lg font-normal space-y-4">
        <p>
          We will provide you with:
        </p>
        <p>
          <strong>(a)</strong> Hosted Services and Support Services, as set out in the Order for your Subscription, or as agreed by us in writing from time to time; and
        </p>
        <p>
          <strong>(b)</strong> additional services from time to time, as set out in any Order accepted by us (Additional Services).
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8">2.2 CLIENT OBLIGATIONS</h3>
      <div className="text-lg font-normal space-y-4">
        <p>You agree to:</p>
        <p>
          <strong>(a)</strong> provide us with all documentation, information and assistance reasonably required by us to perform the Services; and
        </p>
        <p>
          <strong>(b)</strong> provide us with access to any third party or other accounts used by you (including log-in details and passwords), as is reasonably required by us to perform the Services.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8">2.3 CLIENT MATERIAL</h3>
      <div className="text-lg font-normal space-y-4">
        <p>
          <strong>(a)</strong> You warrant that all information, documentation and other Material you provide to us for the purpose of receiving the Services is complete, accurate and up-to-date.
        </p>
        <p>
          <strong>(b)</strong> You release us from all liability in relation to any loss or damage arising out of or in connection with the Services, to the extent such loss or damage is caused or contributed to by information, documentation or any other Material provided by you being incomplete, inaccurate or out-of-date.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8">2.4 REVIEW OF SERVICES</h3>
      <div className="text-lg font-normal space-y-4">
        <p>
          If you review and approve of a Service, then that will constitute acceptance of responsibility for any errors and omissions within that Service (for example, in any copywriting we prepare for you). We will use our best efforts to ensure there are no such errors or omissions.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8">2.5 COLLECTION NOTICE AND PRIVACY</h3>
      <div className="text-lg font-normal space-y-4">
        <p>
          <strong>(a)</strong> We collect personal information about you in the course of providing you with the Solution, to contact and communicate with you, to respond to your enquiries and for other purposes set out in our Privacy Policy.
        </p>
        <p>
          <strong>(b)</strong> Our Privacy Policy contains more information about how we use, disclose and store your information and details how you can access and correct your personal information.
        </p>
        <p>
          <strong>(c)</strong> By agreeing to these Terms, you agree to be bound by our <Link href="/privacy-policy" className="text-ocx-fg-accent underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>

    <div>
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4">
        <span className="pr-4">3</span>FEES AND PAYMENT
      </h2>

      <h3 className="text-xl font-semibold">3.1 FEES</h3>
      <div className="text-lg font-normal space-y-4">
        <p>You agree to pay the Fees in the amounts, and at the times, set out in the relevant Order.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8">3.2 SUBSCRIPTION FEES</h3>
      <div className="text-lg font-normal space-y-4">
        <p>
          You must pay subscription fees to us in the amounts and at the times specified in your Order, or as otherwise agreed in writing (Subscription Fees).
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8">3.3 LATE PAYMENTS</h3>
      <div className="text-lg font-normal space-y-4">
        <p>
          We reserve the right to suspend all or part of the Solution for any period while you fail to pay any Fees in accordance with this clause 4.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8">3.4 NO CHANGE OF MIND REFUNDS</h3>
      <div className="text-lg font-normal space-y-4">
        <p>Our Fees are non-refundable for change of mind.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8">3.5 GST</h3>
      <div className="text-lg font-normal space-y-4">
        <p>
          Unless otherwise indicated, the Fees do not include GST. In relation to any GST payable for a taxable supply by us, you must pay the GST subject to us providing a tax invoice.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8">3.6 CARD SURCHARGES</h3>
      <div className="text-lg font-normal space-y-4">
        <p>
          We reserve the right to charge credit card surcharges in the event payments are made using a credit, debit or charge card (including Visa, MasterCard or American Express).
        </p>
      </div>
    </div>
    <div>
      {/* Section 4: Cancellation of Your Subscription */}
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4">
        <span className="pr-4">4</span>CANCELLATION OF YOUR SUBSCRIPTION
      </h2>
      <div className="text-lg font-normal space-y-4">
        <p>(a) You may cancel your Subscription by notice to us. Your Subscription will end in the then current billing cycle, and you will be charged for that billing cycle.</p>
        <p>(b) Your licence to the Solution under these Terms will last for the remainder of the then current billing cycle to ensure you have an opportunity to retrieve all data you may need from the Software. Once the then current billing cycle ends, we will have no responsibility to store or otherwise retain any User Data, and you release us in respect of any loss or damage which may arise out of us not retaining any User Data or other Material beyond that point.</p>
        <p>(c) Your access to the Solution will be revoked at the end of the relevant billing cycle in which you cancel your Subscription by notice to us.</p>
        <p>(d) We may cancel your Subscription immediately at any time. If we cancel your Subscription under this clause 5(d), in circumstances where you have not breached any of these Terms, we will issue you with a refund of a pro-rata amount of the Subscription Fee, in proportion to the remainder of the period in which you will not have access to your Subscription due to our cancellation.</p>
      </div>

      {/* Section 5: Upgrade and Downgrades */}
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4 mt-8">
        <span className="pr-4">5</span>UPGRADE AND DOWNGRADES
      </h2>
      <div className="text-lg font-normal space-y-4">
        <p>(a) You may notify us if you would like to upgrade or downgrade your subscription tier at any time. If you do, we will:</p>
        <p>(i) Take reasonable steps to promptly provide you with access to the new Subscription Tier; and</p>
        <p>(ii) Upon providing such access, apply the new, relevant Subscription Fees, in the billing cycle immediately following the cycle in which your access to the new Subscription Tier was provided, and you will be charged the new Subscription Fee in that subsequent cycle.</p>
        <p>(b) For the avoidance of doubt, if you choose to downgrade your Subscription, the new Subscription Fees will commence at the start of the next billing cycle, unless we notify you otherwise. We generally do not pro-rate downgrades in between billing cycles, however we reserve the right to do so from time to time.</p>
        <p>(c) If you choose to downgrade your Subscription, you acknowledge and agree we are not liable, and you release us from all claims in relation to, any loss of content, features, or capacity, including any Client Data.</p>
      </div>

      {/* Section 6: Obligations */}
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4 mt-8">
        <span className="pr-4">6</span>OBLIGATIONS
      </h2>
      <h3 className="text-xl font-semibold">6.1 YOUR OBLIGATIONS</h3>
      <div className="text-lg font-normal space-y-4">
        <p>(a) You must ensure that all Users comply with these Terms at all times. You acknowledge and agree that we will have no liability in respect of any damage, loss or expense which arises in connection with your, your Personnel’s, or any User’s, breach of these Terms, and you indemnify us in respect of any such damage, loss or expense.</p>
        <p>(b) You must not, and must not encourage or permit any User, Personnel or any third party to, without our prior written approval:</p>
        <ul className="list-disc list-inside ml-6">
          <li>upload any inappropriate, offensive, illicit, illegal, pornographic, sexist, homophobic or racist material using the Software;</li>
          <li>upload any material that is owned or copyrighted by a third party;</li>
          <li>make copies of the Documentation or the Software;</li>
          <li>adapt, modify or tamper in any way with the Software;</li>
          <li>remove or alter any copyright, trademark or other notice on or forming part of the Software or Documentation;</li>
          <li>act in any way that may harm our reputation or that of associated or interested parties or do anything at all contrary to the interests of us or the Solution;</li>
          <li>use the Software in a way which infringes the Intellectual Property Rights of any third party;</li>
          <li>create derivative works from or translate the Software or Documentation;</li>
          <li>publish or otherwise communicate the Software or Documentation to the public, including by making it available online or sharing it with third parties;</li>
          <li>sell, loan, transfer, sub-licence, hire, or otherwise dispose of the Software or Documentation to any third party;</li>
          <li>decompile or reverse engineer the Software or any part of it, or otherwise attempt to derive its source code;</li>
          <li>attempt to circumvent any technological protection mechanism or other security feature of the Software; or</li>
          <li>permit any use of the Solution in addition to the number of Solution Uses.</li>
        </ul>
        <p>(c) If you become aware of misuse of your Subscription by any person, any errors in the material on your Subscription or any difficulty in accessing or using your Subscription, you must contact us immediately using the contact details or form provided on our website.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8">6.2 USER OBLIGATIONS</h3>
      <div className="text-lg font-normal space-y-4">
        <p>You agree, and you must ensure that all Users agree:</p>
        <ul className="list-disc list-inside ml-6">
          <li>to comply with each of your obligations in these Terms;</li>
          <li>not to intimidate, harass, impersonate, stalk, threaten, bully or endanger any other User or distribute unsolicited commercial content, junk mail, spam, bulk content or harassment in connection with the Solution;</li>
          <li>not to upload any inappropriate, offensive, illicit, illegal, pornographic, sexist, homophobic or racist material using the Solution;</li>
          <li>to sign up for a new Solution account (User Account) in order to use the Solution;</li>
          <li>to not share your User Account with any other person;</li>
          <li>not to use the Software for any purposes other than the purpose of the Software, which is to build and deploy AI assistants, to be used by Users (Purpose);</li>
          <li>not to integrate the Software with third party data or Software, or make additions or changes to the Software (including by incorporating APIs into the Software) other than for the Purpose;</li>
          <li>to not share your User Account information (including your Account information), including log in details or passwords, with any other person and that any use of your User Account or Account by any person who is not the account holder is strictly prohibited. You must immediately notify us of any unauthorised use of your User Account, Account, password or email, or any other breach or potential breach of the Solution’s security;</li>
          <li>to not use the Solution for any purpose other than for the purpose for which it was designed, including not to use the Solution in a manner that is illegal or fraudulent or facilitates illegal or fraudulent activity (including requesting or accepting a job which includes illegal activities or purposes);</li>
          <li>not to use the Solution in a way which infringes the Intellectual Property Rights of any third party;</li>
          <li>not to act in any way that may harm our reputation or that of associated or interested parties or do anything at all contrary to the interests of us or the Solution;</li>
          <li>you must not make any automated use of the Solution and you must not copy, reproduce, translate, adapt, vary or modify the Solution without our express written consent;</li>
          <li>that we may change any features of the Solution at any time on notice to you;</li>
          <li>that information given to you through the Software, by us or another User, is general in nature and we take no responsibility for anything caused by any actions you take in reliance on that information; and</li>
          <li>that we may cancel your, or any User’s, Account at any time if we consider, in our absolute discretion, that you or they are in breach of, or are likely to breach, this clause 7.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8">6.3 HOSTED SERVICES</h3>
      <div className="text-lg font-normal space-y-4">
        <p>We will store User Data you upload to the Software using a third party hosting service selected by us (Hosting Service), subject to the following terms:</p>
        <ul className="list-disc list-inside ml-6">
          <li>(hosting location) we may use storage servers to host the Software through cloud-based services, and potentially other locations outside Australia, unless otherwise agreed in writing.</li>
          <li>(service quality) While we will use our best efforts to select an appropriate hosting provider, we do not guarantee that the Hosting Service will be free from errors or defects or that User Data will be accessible or available at all times.</li>
          <li>(backups & disaster recovery) In the event that User Data is lost due to a system failure (e.g. a database or webserver crash), we cannot guarantee that any backup will be available, or if available that such a backup will be free from errors or defects.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8">6.4 SUPPORT SERVICES</h3>
      <div className="text-lg font-normal space-y-4">
        <p>If the Solution includes us providing you with support, where necessary to resolve technical issues with the Software (Support Services), unless otherwise specifically agreed in writing:</p>
        <ul className="list-disc list-inside ml-6">
          <li>We will take reasonable steps to provide Support Services where necessary. You should first endeavour to resolve any issues with the Software internally and we will not assist with issues that are beyond our reasonable control.</li>
          <li>You are responsible for all internal administration and managing access, including storing back-up passwords and assisting your Personnel to access and use the Software.</li>
          <li>You will not have any claim for delay to your access to the Software due to any failure or delay in Support Services.</li>
        </ul>
      </div>
    </div>
    <div>
      {/* Section 7: Posted Material */}
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4">
        <span className="pr-4">7</span>POSTED MATERIAL
      </h2>

      <h3 className="text-xl font-semibold">7.1 WARRANTIES AND INDEMNITY</h3>
      <div className="text-lg font-normal space-y-4">
        <p>
          (a) By providing or posting any information, Material or other content in connection with the Software (Posted Material), you represent and warrant that, and must ensure that all Users make equivalent representations and warranties:
        </p>
        <ul className="list-disc list-inside ml-6">
          <li>you are authorised to provide the Posted Material (including by being authorised to provide any services that you represent you provide);</li>
          <li>the Posted Material is free from any harmful, discriminatory, defamatory or maliciously false implications and does not contain any offensive or explicit material;</li>
          <li>the Posted Material is free from any material that may harm our reputation or that of associated or interested parties;</li>
          <li>the Posted Material is not “passing off” of any product or service and does not constitute unfair competition;</li>
          <li>the Posted Material does not infringe any Intellectual Property Rights, including copyright, trademarks, business names, patents, Confidential Information or any other similar proprietary rights, whether registered or unregistered, anywhere in the world;</li>
          <li>the Posted Material does not contain any viruses or other harmful code, or otherwise compromise the security or integrity of the Solution or any network or system; and</li>
          <li>the Posted Material does not breach or infringe any applicable Laws.</li>
        </ul>
        <p>(b) You indemnify us against all damages, losses, costs and expenses incurred by us arising in connection with any third party claim that Posted Material infringes any third party’s Intellectual Property Rights.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8">7.2 REMOVAL</h3>
      <div className="text-lg font-normal space-y-4">
        <p>
          (a) The Software acts as a passive conduit for the online distribution of Posted Material, and we have no obligation to screen Posted Material. However, we may, in our absolute discretion, review and remove any Posted Material from the Solution at any time without giving any explanation or justification for removing the Posted Material, including if we determine that the Posted Material infringes a third party’s Intellectual Property Rights, or is reasonably likely to.
        </p>
        <p>
          (b) You agree that you are responsible for keeping and maintaining records of Posted Material.
        </p>
      </div>

      {/* Section 8: Intellectual Property and Data */}
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4 mt-8">
        <span className="pr-4">8</span>INTELLECTUAL PROPERTY AND DATA
      </h2>

      <h3 className="text-xl font-semibold">8.1 INFRINGING CONTENT ON THE SOFTWARE</h3>
      <div className="text-lg font-normal space-y-4">
        <p>(a) If you become aware of Posted Material, or other Material, on the Software that infringes the Intellectual Property Rights of any person, or is reasonably likely to, you must contact us immediately.</p>
        <p>
          (b) If you submit a complaint to us under clause 8.1(a):
        </p>
        <ul className="list-disc list-inside ml-6">
          <li>you warrant that the substance of the complaint is accurate, true and involves infringement of copyright;</li>
          <li>you acknowledge and agree that groundless threats of legal proceedings in relation to copyright infringement may be prohibited under applicable law (for example, Australia’s Copyright Act 1968, or equivalent laws wherever you are located); and</li>
          <li>you agree to indemnify omnichannel CX in relation to any loss or damage that may arise in relation to your complaint, including in relation to any third party claim that the complaint contains a groundless threat.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8">8.2 SOFTWARE CONTENT INTELLECTUAL PROPERTY</h3>
      <div className="text-lg font-normal space-y-4">
        <p>(a) (Our ownership) We retain ownership of all materials provided to you throughout the course of your Subscription in connection with the Software (including text, graphics, logos, design, icons, images, sound and video recordings, pricing, downloads and software) (Software Content) and reserve all rights in any Intellectual Property Rights owned or licensed by us not expressly granted to you.</p>
        <p>(b) (Licence to you) You are granted a licence to the Software Content, for the Number of Solution Uses, and you may make a temporary electronic copy of the Software Content for the sole purpose of viewing it and using it for the purposes of the Software. You must not otherwise reproduce, transmit, adapt, distribute, sell, modify or publish any Software Content without prior written consent from us or as otherwise permitted by Law.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8">8.3 CLIENT DATA</h3>
      <div className="text-lg font-normal space-y-4">
        <p>(a) You grant to us (and our personnel) a non-exclusive, royalty free, non-transferable, worldwide and irrevocable licence to use Client Data to the extent reasonably required to provide the Solution and to improve the Solution.</p>
        <p>(b) We will:</p>
        <ul className="list-disc list-inside ml-6">
          <li>establish, maintain, enforce and continuously improve safety and security procedures and safeguards against the unauthorised use, destruction, loss or alteration of Client Data;</li>
          <li>not make any undocumented, unreported or authorised configuration changes to our systems or to the information security controls that secure Client Data, if those changes would materially decrease the protections afforded to Client Data; and</li>
          <li>notify and keep you notified at all times of our current safety and security procedures and safeguards that are made from time to time.</li>
        </ul>
        <p>(c) We reserve the right to remove any Client Data at any time, for any reason, including where we deem Client Data to be inappropriate, offensive, illicit, illegal, pornographic, sexist, homophobic or racist.</p>
        <p>(d) You are responsible for ensuring that:</p>
        <ul className="list-disc list-inside ml-6">
          <li>you share Client Data only with intended recipients; and</li>
          <li>all Client Data is appropriate and not offensive.</li>
        </ul>
        <p>(e) You:</p>
        <ul className="list-disc list-inside ml-6">
          <li>warrant that our use of Client Data will not infringe any third-party Intellectual Property Rights; and</li>
          <li>indemnify us from and against all losses, claims, expenses, damages and liabilities (including any taxes, fees or costs) which arise out of such infringement.</li>
        </ul>
      </div>

      {/* Section 9: Third Party Software, Terms & Conditions */}
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4 mt-8">
        <span className="pr-4">9</span>THIRD PARTY SOFTWARE, TERMS & CONDITIONS
      </h2>

      <h3 className="text-xl font-semibold">9.1 THIRD PARTY TERMS</h3>
      <div className="text-lg font-normal space-y-4">
        <p>(a) You acknowledge and agree that the terms & conditions of third party suppliers of goods or services (Third Party Terms), including those listed below, may apply to your use of the Solution from time to time (including to any Additional Services) and you agree to the Third Party Terms.</p>
        <p>(b) We will not be liable for any loss or damage suffered by you in connection with such Third Party Terms.</p>
        <p>(c) You must immediately notify us if you do not agree to such Third Party Terms and if you do not agree to any Third Party Terms, this may affect our ability to meet any agreed schedules for Service delivery.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8">9.2 THIRD PARTY SOFTWARE INTEGRATIONS</h3>
      <div className="text-lg font-normal space-y-4">
        <p>(a) You acknowledge and agree that issues can arise when data is uploaded to software, when data is transferred between different software programs, and when different software programs are integrated together. We cannot guarantee that integration processes between the Software and other software programs will be free from errors, defects or delay.</p>
        <p>(b) You agree that we will not be liable for the functionality of any third party goods or services, including any third party software, or for the functionality of the Software if you integrate it with third party software, or change or augment the Software, including by making additions or changes to the Software code, and including by incorporating APIs into the Software.</p>
        <p>(c) If you add third party software or software code to the Software, integrate the Software with third party software, or make any other changes to the Software, including the Software code (User Software Changes), then:</p>
        <ul className="list-disc list-inside ml-6">
          <li>you acknowledge and agree that User Software Changes can have adverse effects on the Solution, including the Software;</li>
          <li>you will indemnify us in relation to any loss or damage that arises in connection with the User Software Changes;</li>
          <li>we will not be liable for any failure in the Solution, to the extent such failure is caused or contributed to by a User Software Change;</li>
          <li>we may require you to change or remove User Software Changes, at our discretion, and if we do so, you must act promptly;</li>
          <li>we may suspend your access to the Solution until you have changed or removed User Software Change; and/or</li>
          <li>we may change or remove any User Software Change, in our absolute discretion. We will not be liable for loss of data or any other loss or damage you may suffer in relation to our amendment to, or removal of, any User Software Change.</li>
        </ul>
      </div>

      {/* Section 10: Confidentiality and Privacy */}
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4 mt-8">
        <span className="pr-4">10</span>CONFIDENTIALITY AND PRIVACY
      </h2>

      <div className="text-lg font-normal space-y-4">
        <p>(a) Except as contemplated by these Terms, a party must not, and must not permit any of its officers, employees, agents, contractors or related companies to, use or disclose to any person any Confidential Information disclosed to it by the other party without the disclosing party’s prior written consent.</p>
        <p>(b) You agree to our Privacy Policy, located on our Website, which is incorporated into these Terms by reference. Please read the Privacy Policy carefully as it governs our collection, use, and disclosure of personal information.</p>
        <p>(c) Each party must promptly notify the other party if it learns of any potential, actual or suspected loss, misappropriation or unauthorised access to, or disclosure or use of Confidential Information or other compromise of the security, confidentiality, or integrity of Confidential Information.</p>
        <p>(d) The notifying party will investigate each potential, actual or suspected Security Breach and assist the other party in connection with any related investigation.</p>
      </div>

      {/* Section 11: Liability */}
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4 mt-8">
        <span className="pr-4">11</span>LIABILITY
      </h2>

      <h3 className="text-xl font-semibold">11.1 WARRANTIES AND LIMITATIONS</h3>
      <div className="text-lg font-normal space-y-4">
        <p>(a) (Warranties) We warrant that:</p>
        <ul className="list-disc list-inside ml-6">
          <li>during the Subscription Period, the Software will perform substantially in accordance with the Documentation;</li>
          <li>during the Subscription Period, the Solution will be provided as described to you in, and subject to, these Terms; and</li>
          <li>to our knowledge, the use of the Software in accordance with these Terms will not infringe the Intellectual Property Rights of any third party.</li>
        </ul>
        <p>(b) (Errors) We will correct any errors, bugs or defects in the Software which arise during the Subscription Period and which are notified to us by you, unless the errors, bugs or defects:</p>
        <ul className="list-disc list-inside ml-6">
          <li>result from the interaction of the Software with any other solution or computer hardware, software or services not approved in writing by us;</li>
          <li>result from any misuse of the Software; or</li>
          <li>result from the use of the Software by you other than in accordance with these Terms or the Documentation.</li>
        </ul>
        <p>(c) (Service Limitations) The Solution is made available to you strictly on an ‘as is’ basis. Without limitation, you acknowledge and agree that we cannot guarantee that:</p>
        <ul className="list-disc list-inside ml-6">
          <li>the Solution will be free from errors or defects;</li>
          <li>the Solution will be accessible at all times;</li>
          <li>messages sent through the Solution will be delivered promptly, or delivered at all;</li>
          <li>information you receive or supply through the Solution will be secure or confidential; or</li>
          <li>any information provided through the Solution is accurate or true.</li>
        </ul>
        <p>(d) You acknowledge and agree that:</p>
        <ul className="list-disc list-inside ml-6">
          <li>we are not liable for any unauthorised use, destruction, loss, damage or alteration to User Data, including due to hacking, malware, ransomware, viruses, malicious computer code or other forms of interference;</li>
          <li>any information provided to you as part of or in connection with the Solution or the Services is general in nature, may not be suitable for your circumstances and does not constitute financial, legal or any other kind of professional advice; and</li>
          <li>it is your responsibility to comply with applicable Laws relevant to your business, including industrial relations Laws and Privacy Laws.</li>
        </ul>
        <p>(e) (Exclusion) To the maximum extent permitted by applicable law, all express or implied representations and warranties (whether relating to fitness for purpose or performance, or otherwise) not expressly stated in these Terms are excluded.</p>
        <p>(f) (Consumer law) Any liability relating to the provision of any service which may not be excluded by the operation of the Australian Consumer Law contained in the Competition and Consumer Act 2010 (Cth) (ACL) shall be limited to the fees otherwise charged by us for the service, or, at our option, to provide the service again.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8">11.2 LIMITATION OF LIABILITY</h3>
      <div className="text-lg font-normal space-y-4">
        <p>(a) (Limitation of liability) Subject to clause 11.1(f), to the maximum extent permitted by applicable law, our maximum aggregate liability to you in respect of loss or damage sustained by you under or in connection with these Terms or the Solution is limited to the total Fees paid to us by you in the 3 months preceding the first event giving rise to the relevant liability.</p>
        <p>(b) (Indemnity) You agree at all times to indemnify and hold harmless omnichannel CX PTY LTD and its officers, employees and agents (“those indemnified”) from and against any loss (including reasonable legal costs) or liability incurred or suffered by any of those indemnified where such loss or liability was caused or contributed to by you or your officers’, employees’ or agents’:</p>
        <ul className="list-disc list-inside ml-6">
          <li>breach of any of these Terms; or</li>
          <li>negligent, fraudulent or criminal act or omission.</li>
        </ul>
        <p>(c) (Consequential loss) Subject to clause 11.1(f), we will not be liable for any incidental, special or consequential loss or damages, or damages for loss of data, business or business opportunity, goodwill, anticipated savings, profits or revenue arising under or in connection with these Terms or any goods or services provided by us, except to the extent this liability cannot be excluded under the Competition and Consumer Act 2010 (Cth) or any other applicable law.</p>
      </div>
    </div>
    <div className="text-lg font-normal space-y-4">
      
      {/* Section 12: Cancellation, Disputes and Termination */}
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4 mt-8">
        <span className="pr-4">12</span>CANCELLATION, DISPUTES AND TERMINATION
      </h2>

      <h3 className="text-xl font-semibold">12.1 DISPUTE RESOLUTION</h3>
      <div className="text-lg font-normal space-y-4">
        <p>(a) A party claiming that a dispute has arisen under or in connection with this agreement must not commence court proceedings arising from or relating to the dispute, other than a claim for urgent interlocutory relief, unless that party has complied with the requirements of this clause.</p>
        <p>(b) A party that requires resolution of a dispute which arises under or in connection with this agreement must give the other party or parties to the dispute written notice containing reasonable details of the dispute and requiring its resolution under this clause.</p>
        <p>(c) Once the dispute notice has been given, each party to the dispute must then use its best efforts to resolve the dispute in good faith. If the dispute is not resolved within a period of 14 days (or such other period as agreed by the parties in writing) after the date of the notice, any party to the dispute may take legal proceedings to resolve the dispute.</p>
      </div>

      <h3 className="text-xl font-semibold">12.2 TERMINATION BY US</h3>
      <div className="text-lg font-normal space-y-4">
        <p>(a) We may terminate these Terms or any Subscription in whole or in part immediately by written notice to you, at any time for any reason, including if:</p>
        <ul className="list-disc list-inside ml-6">
          <li>you, a member of your Personnel, or a User, are in breach of any term of these Terms; or</li>
          <li>you become subject to any form of insolvency or bankruptcy administration.</li>
        </ul>
        <p>(b) If we terminate these Terms under this clause 13, in circumstances where you have not breached any of these Terms, we will issue you with a refund of a pro rata amount of the current 30 day period’s Subscription Fee, in proportion to the remainder of the 30 day period in which you will not have access to your Subscription.</p>
      </div>

      <h3 className="text-xl font-semibold">12.3 TERMINATION BY CLIENT</h3>
      <div className="text-lg font-normal space-y-4">
        <p>You may terminate these Terms if:</p>
        <ul className="list-disc list-inside ml-6">
          <li>(a) we have committed a material breach of these Terms and have failed to remedy the breach within 30 days’ of receipt of written notice from you; or</li>
          <li>(b) we become subject to any form of insolvency or bankruptcy administration.</li>
        </ul>
        <p>If you validly terminate in accordance with this clause 13, no further fees will be payable by you (unless later found that such termination was invalid).</p>
      </div>

      {/* Section 13: Force Majeure */}
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4 mt-8">
        <span className="pr-4">13</span>FORCE MAJEURE
      </h2>

      <div className="text-lg font-normal space-y-4">
        <p>(a) We will not be liable for any delay or failure to perform its obligations under this agreement if such delay or failure arises out of a Force Majeure Event.</p>
        <p>(b) If a Force Majeure Event occurs, we must use reasonable endeavours to notify you of:</p>
        <ul className="list-disc list-inside ml-6">
          <li>reasonable details of the Force Majeure Event; and</li>
          <li>so far as is known, the probable extent to which We will be unable to perform or be delayed in performing its obligations under this agreement.</li>
        </ul>
        <p>(c) Subject to compliance with clause 14(b), our relevant obligation will be suspended during the Force Majeure Event to the extent that it is affected by the Force Majeure Event.</p>
        <p>(d) For the purposes of this agreement, a ‘Force Majeure Event’ means any:</p>
        <ul className="list-disc list-inside ml-6">
          <li>act of God, lightning strike, meteor strike, earthquake, storm, flood, landslide, explosion or fire;</li>
          <li>strikes or other industrial action outside of the control of us;</li>
          <li>war, terrorism, sabotage, blockade, revolution, riot, insurrection, civil commotion, epidemic, pandemic; or</li>
          <li>any decision of a government authority in relation to COVID-19, or any threat of COVID-19 beyond the reasonable control of us, to the extent it affects our ability to perform our obligations.</li>
        </ul>
      </div>

      {/* Section 14: Notices */}
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4 mt-8">
        <span className="pr-4">14</span>NOTICES
      </h2>

      <div className="text-lg font-normal space-y-4">
        <p>(a) A notice or other communication to a party under these Terms must be:</p>
        <ul className="list-disc list-inside ml-6">
          <li>(i) in writing and in English; and</li>
          <li>(ii) delivered via email to the other party, to the email address specified in the Order, or if no email address is specified in the Order, then the email address most regularly used by the parties to correspond regarding the subject matter of this agreement as at the date of this agreement (Email Address). The parties may update their Email Address by notice to the other party.</li>
        </ul>
        <p>(b) Unless the party sending the notice knows or reasonably ought to suspect that an email was not delivered to the other party’s Email Address, notice will be taken to be given:</p>
        <ul className="list-disc list-inside ml-6">
          <li>(i) 24 hours after the email was sent, unless that falls on a Saturday, Sunday or a public holiday in the state or territory whose laws govern this agreement, in which case the notice will be taken to be given on the next occurring business day in that state or territory; or</li>
          <li>(ii) when replied to by the other party, whichever is earlier.</li>
        </ul>
      </div>

      {/* Section 15: General */}
      <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4 mt-8">
        <span className="pr-4">15</span>GENERAL
      </h2>

      <h3 className="text-xl font-semibold">15.1 GOVERNING LAW AND JURISDICTION</h3>
      <div className="text-lg font-normal space-y-4">
        <p>This agreement is governed by the law applying in New South Wales in Australia. Each party irrevocably submits to the exclusive jurisdiction of the courts of New South Wales and courts of appeal from them in respect of any proceedings arising out of or in connection with this agreement. Each party irrevocably waives any objection to the venue of any legal process on the basis that the process has been brought in an inconvenient forum.</p>
      </div>

      <h3 className="text-xl font-semibold">15.2 WAIVER</h3>
      <div className="text-lg font-normal space-y-4">
        <p>No party to this agreement may rely on the words or conduct of any other party as a waiver of any right unless the waiver is in writing and signed by the party granting the waiver.</p>
      </div>

      <h3 className="text-xl font-semibold">15.3 SEVERANCE</h3>
      <div className="text-lg font-normal space-y-4">
        <p>Any term of this agreement which is wholly or partially void or unenforceable is severed to the extent that it is void or unenforceable. The validity and enforceability of the remainder of this agreement is not limited or otherwise affected.</p>
      </div>

      <h3 className="text-xl font-semibold">15.4 JOINT AND SEVERAL LIABILITY</h3>
      <div className="text-lg font-normal space-y-4">
        <p>An obligation or a liability assumed by, or a right conferred on, two or more persons binds or benefits them jointly and severally.</p>
      </div>

      <h3 className="text-xl font-semibold">15.5 ASSIGNMENT</h3>
      <div className="text-lg font-normal space-y-4">
        <p>A party cannot assign, novate or otherwise transfer any of its rights or obligations under this agreement without the prior written consent of the other party.</p>
      </div>

      <h3 className="text-xl font-semibold">15.6 ENTIRE AGREEMENT</h3>
      <div className="text-lg font-normal space-y-4">
        <p>This agreement embodies the entire agreement between the parties and supersedes any prior negotiation, conduct, arrangement, understanding or agreement, express or implied, in relation to the subject matter of this agreement.</p>
      </div>

      <h3 className="text-xl font-semibold">15.7 INTERPRETATION</h3>
      <div className="text-lg font-normal space-y-4">
        <ul className="list-disc list-inside ml-6">
          <li>(a) (singular and plural) words in the singular includes the plural (and vice versa);</li>
          <li>(b) (currency) a reference to $; or “dollar” is to Australian currency;</li>
          <li>(c) (gender) words indicating a gender includes the corresponding words of any other gender;</li>
          <li>(d) (defined terms) if a word or phrase is given a defined meaning, any other part of speech or grammatical form of that word or phrase has a corresponding meaning;</li>
          <li>(e) (person) a reference to “person” or “you” includes an individual, the estate of an individual, a corporation, an authority, an association, consortium or joint venture (whether incorporated or unincorporated), a partnership, a trust and any other entity;</li>
          <li>(f) (party) a reference to a party includes that party’s executors, administrators, successors and permitted assigns, including persons taking by way of novation and, in the case of a trustee, includes any substituted or additional trustee;</li>
          <li>(g) (this agreement) a reference to a party, clause, paragraph, schedule, exhibit, attachment or annexure is a reference to a party, clause, paragraph, schedule, exhibit, attachment or annexure to or of this agreement, and a reference to this agreement includes all schedules, exhibits, attachments and annexures to it;</li>
          <li>(h) (document) a reference to a document (including this agreement) is to that document as varied, novated, ratified or replaced from time to time;</li>
          <li>(i) (headings) headings and words in bold type are for convenience only and do not affect interpretation;</li>
          <li>(j) (includes) the word “includes” and similar words in any form is not a word of limitation; and</li>
          <li>(k) (adverse interpretation) no provision of this agreement will be interpreted adversely to a party because that party was responsible for the preparation of this agreement or that provision.</li>
        </ul>
      </div>
      
    </div>

    <div className="text-lg font-normal space-y-4">

<h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4">
  DEFINITIONS
</h2>

<h3 className="text-xl font-semibold">Client Data</h3>
<p>means any data, document or other Material supplied by you to us under or in connection with these Terms or a Subscription, including any Intellectual Property Rights attaching to those materials.</p>

<h3 className="text-xl font-semibold">Confidential Information</h3>
<p>means information of or provided by a party that is by its nature is confidential information, is designated by that party as confidential, or that the other party knows or ought to know is confidential, but does not include information, which is or becomes, without a breach of confidentiality, public knowledge.</p>

<h3 className="text-xl font-semibold">Documentation</h3>
<p>means all manuals, help files and other documents supplied by us to you relating to the Software, whether in electronic or hardcopy form.</p>

<h3 className="text-xl font-semibold">Fees</h3>
<p>means the Subscription Fees, fees for Additional Services and any other fees the Client must pay in accordance with an Order.</p>

<h3 className="text-xl font-semibold">Hosted Services</h3>
<p>has the meaning given in clause 3.1.</p>

<h3 className="text-xl font-semibold">Intellectual Property Rights</h3>
<p>means any and all present and future intellectual and industrial property rights throughout the world (whether registered or unregistered), including copyright, trademarks, designs, patents, moral rights, semiconductor and circuit layout rights, trade, business, company and domain names, and other proprietary rights, trade secrets, know-how, technical data, confidential information and the right to have information kept confidential, or any rights to registration of such rights (including renewal), whether created before or after the date of this agreement.</p>

<h3 className="text-xl font-semibold">Material</h3>
<p>means tangible and intangible information, documents, reports, software (including source and object code), inventions, data and other materials in any media whatsoever.</p>

<h3 className="text-xl font-semibold">Number of Solution Uses</h3>
<p>means the number of websites, or any other platform or use, that you may use the Solution in respect to, in accordance with your Subscription Tier.</p>

<h3 className="text-xl font-semibold">Personnel</h3>
<p>means, in respect of a party, its officers, employees, contractors (including subcontractors) and agents.</p>

<h3 className="text-xl font-semibold">Services</h3>
<p>means the Hosted Services, the Support Services, the Additional Services, and any other services we agree in writing to provide.</p>

<h3 className="text-xl font-semibold">Software</h3>
<p>means the software as described on our Website, and which is licensed to you in accordance with clauses 1.4 and 9.2.</p>

<h3 className="text-xl font-semibold">Software Content</h3>
<p>has the meaning set out in clause 9.2(a).</p>

<h3 className="text-xl font-semibold">Solution</h3>
<p>includes the Software and the Services (and any other services to be provided to you under these Terms).</p>

<h3 className="text-xl font-semibold">Subscription</h3>
<p>has the meaning given in the first paragraph of these Terms, and includes the limitations set out on the Website.</p>

<h3 className="text-xl font-semibold">Subscription Fees</h3>
<p>has the meaning set out in clause 4 of these Terms.</p>

<h3 className="text-xl font-semibold">Subscription Period</h3>
<p>means the period of your Subscription to the Solution as agreed on the Website.</p>

<h3 className="text-xl font-semibold">Subscription Tier</h3>
<p>has the meaning given in the first paragraph of these Terms.</p>

<h3 className="text-xl font-semibold">Support Services</h3>
<p>has the meaning given in clause 3.2.</p>

<h3 className="text-xl font-semibold">User</h3>
<p>means end users of the Solution and any other third party granted access to the Software by you.</p>

<h3 className="text-xl font-semibold">User Data</h3>
<p>means files, data, materials or any other information, which is uploaded to the Software by you or any other User, including any Intellectual Property Rights attaching to those files, data, materials or any other information.</p>

<h3 className="text-xl font-semibold">Website</h3>
<p>means the website at the URL set out in the first paragraph of these Terms, and any other website operated by us in connection with the Solution.</p>

</div>
        </div>
        </div>



    </StickyScrollLayout>
  );
}

