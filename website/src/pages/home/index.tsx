import React from 'react';
import {
  Lang,
} from '../../components/lang.tsx';

const Index = () => <section>
  <div className="title-card">
    <h1>
      <Lang lnkey="home.title"/>
    </h1>
    <p>
        This project provides a framework for testing rest-apis and websites for
        changes in response times. <br /> This helps to detect performance
        changes in code in a quick and simple manner.
    </p>
  </div>
  <div className="card">
    <h2>Why use a Benchmark Runner?</h2>
    <p>
        Given that the amount of APIs increase by moving to microservices, we
        need a way to determine if changes to a service's response times are
        related to code changes. <br />
        For this purpose a defined load with repeatable request seems the most
        useful.
    </p>
  </div>
  <div className="card">
    <h2>Regarding existing libraries</h2>
    <p>
        Other tools like{' '}
      <a href="https://github.com/matteofigus/api-benchmark" target="_blank">
          matteofigus/api-benchmark
      </a>
     ,
      <a
        href="https://github.com/bvanderlaan/api-bench-runner"
        target="_blank"
      >
          bvanderlaan/api-bench-runner
      </a>
     , or
      <a href="https://github.com/jeffbski/bench-rest" target="_blank">
          jeffbski/bench-rest
      </a>
        are all untouched for quite a while and don't provide type definitions
        for typescript. This makes them less desirable when working with bigger
        projects where the better static code check is a huge boost in
        development speed. <br />
        Additionally, this tool separates the validation thread from the thread
        processing the actual requests to further minimize the effect of
        complicated validations or huge response bodies on the data gathering.
    </p>
  </div>
</section>;
export default Index;
