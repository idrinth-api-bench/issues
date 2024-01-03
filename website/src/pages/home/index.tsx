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
    <footer  className='footermainrow'>
      <div className='div-block'>
        <a href="#" className='logofooter'>
          <img className="imglogo" src="/src/assets/readme-svgrepo-com.svg" alt="readme" width={70}/>
          <strong>@idrinth/api-bench</strong>
        </a>
        <p className='footertext'>
        Efficiently test APIs & sites for response time changes,
        simplifying code performance detection
        </p>
      </div>
      <div className='footerfromblock'>
        <p className='footercaps'>
        OPTIMIZE RESPONSE TIMES. SIMPLIFY CODE PERFORMANCE.
        </p>
      </div>
    </footer>
    <footer className='footerSecondRow'>
      <div className='termcondblock'>
        <p>© 2020 Björn Büttner and contributors. All Rights Reserved</p>
        <a href="#" className='footerlink'>privacy policy</a>
        <a href="#" className='footerlink'>Terms and conditions</a>
      </div>
    </footer>
  </div>
</section>;
export default Index;
