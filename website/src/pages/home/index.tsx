import {
  Trans,
} from 'react-i18next';
import React from 'react';

const Index = () => <section className="home">
  <div className="title-card">
    <Trans>
      <h1>What does this project do?</h1>
    </Trans>
    <p className='mainptag'>
          This project provides a framework for testing rest-apis and websites
          for changes in response times. <br /> This helps to detect performance
          changes in code in a quick and simple manner.
    </p>
  </div>
  <div className="card">
    <h2>Why use a Benchmark Runner?</h2>
    <p className='mainptag'>
          Given, that the amount of APIs increase by moving to microservices, we
          need a way to determine if changes to a service's response times are
          related to code changes. <br />
          For this purpose a defined load with repeatable request seems the most
          useful.
    </p>
  </div>
  <div className="card">
    <h2>Regarding existing libraries</h2>
    <p className='mainptag'>
          Other tools like{' '}
      <a
        href="https://github.com/matteofigus/api-benchmark"
        target="_blank"
      >
            matteofigus/api-benchmark
      </a>
          ,{' '}
      <a
        href="https://github.com/bvanderlaan/api-bench-runner"
        target="_blank"
      >
            bvanderlaan/api-bench-runner
      </a>
          , or{' '}
      <a href="https://github.com/jeffbski/bench-rest" target="_blank">
            jeffbski/bench-rest
      </a>
          are all untouched for quite a while and don't provide type definitions
          for typescript. This makes them less desirable when working with
          bigger projects where the better static code check is a huge boost in
          development speed. <br />
          Additionally, this tool separates the validation thread from the
          thread processing the actual requests to further minimize the effect
          of complicated validations or huge response bodies on the data
          gathering.
    </p>
  </div>
  <div>
  <footer className="bg-[#242329]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/src/assets/readme-svgrepo-com.svg" className="h-8" alt="logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">@idrinth/api-bench</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2020 <a href="#" className="hover:underline">Björn Büttner and contributors</a>. All Rights Reserved.</span>
      </div>
    </footer>
  </div>
</section>;
export default Index;
