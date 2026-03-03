import RecruitHeader from "@/components/recruit/recruit-header";
import Footer from "@/components/recruit/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Protection | RecruitPalz",
  description: "Learn about RecruitPalz's data protection policies and procedures in compliance with CCPA.",
};

export default function DataPolicy() {
  return (
    <>
      <RecruitHeader />
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">Data Protection</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Deletion Policy and Procedures</h2>
            <p className="mb-6">
              RecruitPalz has implemented this Data Deletion Policy and Procedures in accordance to the California Consumer Privacy Act of 2018 (CCPA). Under this law, California residents have the right to have their personal information deleted (Cal. Civ. Code Sec. 1798.105).
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">To submit a request:</h3>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Send an email to <a href="mailto:support@recruitpalz.com" className="text-primary hover:underline">support@recruitpalz.com</a></li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Important Information</h3>
            <p className="mb-4">
              However, Cal. Civ. Code Sec. 1798.105 states that the right to delete is not absolute. Under this statute, a business or a service provider shall not be required to comply with a consumer's request to delete the consumer's personal information if it is necessary for the business or service provider to maintain the consumer's personal information in order to:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li>Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by the consumer, or reasonably anticipated within the context of a business' ongoing business relationship with the consumer, or otherwise perform a contract between the business and the consumer.</li>
              <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity.</li>
              <li>Debug to identify and repair errors that impair existing intended functionality.</li>
              <li>Exercise free speech, ensure the right of another consumer to exercise that consumer's right of free speech, or exercise another right provided for by law.</li>
              <li>Comply with the California Electronic Communications Privacy Act pursuant to Chapter 3 (commencing with Section 1546) of Title 12 of Part 2 of the Penal Code.</li>
              <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the business' deletion of the information is likely to render impossible or seriously impair the achievement of such research, if the consumer has provided informed consent.</li>
              <li>To enable solely internal uses that are reasonably aligned with the expectations of the consumer based on the consumer's relationship with the business.</li>
              <li>Comply with a legal obligation.</li>
              <li>Otherwise use the consumer's personal information, internally, in a lawful manner that is compatible with the context in which the consumer provided the information.</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Our Process</h3>
            <p className="mb-4">
              Upon receiving a request, RecruitPalz will confirm receipt of the request within 10 business days. RecruitPalz will then inform the customer how it will proceed with the request. By law, RecruitPalz has 45 days from the date of receipt to respond to the request.
            </p>

            <p className="mb-4">
              If RecruitPalz complies with the request, we will remove the information from our existing systems except for archives or backup systems. We will also remove the information from third party data service providers (see Cal. Civ. Code Sec. 1798.115(c)).
            </p>

            <p className="mb-4">
              If RecruitPalz denies the request, we will inform you the reason why we are not complying with the request, including state and federal laws, an exception under the CCPA, and we will not use the information for any other purpose except provided for by that exception. We may also deny the request if we cannot ascertain the identity of the requestor or if the information was not collected from the consumer.
            </p>

            <p className="mb-6">
              RecruitPalz will keep a record of the deletion requests and how we responded for up to 24 months.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
            <p className="mb-2">
              If you have any questions about this Data Protection policy, you can contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>By email: <a href="mailto:support@recruitpalz.com" className="text-primary hover:underline">support@recruitpalz.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
