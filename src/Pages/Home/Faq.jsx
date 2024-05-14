
const Faq = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 my-24">
        <section className="bg-inherit border-2 rounded-lg">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl my-5 mb-7">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-rose-600">
                  How do I book a consultation with a doctor on your website?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Booking a consultation is simple. Just navigate to our
                  appointment booking page, select the type of consultation you
                  need, choose a convenient time slot, and fill out the
                  necessary information. You will receive confirmation of your
                  appointment via email
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-rose-600">
                  Are the doctors on your platform licensed and experienced?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Yes, all the doctors on our platform are licensed
                  professionals with extensive experience in their respective
                  fields. We carefully vet each doctor to ensure they meet our
                  high standards of expertise and professionalism.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-rose-600">
                  Can I choose a specific doctor for my consultation?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Absolutely! You have the option to choose a specific doctor
                  based on their profile, specialty, and availability. If you
                  have a preference for a particular doctor, you can select them
                  when booking your appointment.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-rose-600">
                  What types of consultations do you offer?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  We offer a wide range of consultation services across various
                  medical specialties, including primary care, dermatology,
                  mental health, pediatrics, orthopedics, cardiology, and more.
                  Whatever your healthcare needs, we have a doctor who can help.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Faq;