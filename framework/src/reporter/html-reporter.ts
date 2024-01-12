import Reporter from './reporter.js';
import {
  createWriteStream,
} from 'fs';
import FinishedRun from '../finished-run.js';

const html: Reporter = (
  results: FinishedRun,
  rootDir: string,
): void => {
  const stream = createWriteStream(rootDir + '/result.html',);
  stream.write('<!DOCTYPE HTML>',);
  stream.write('<html lang="en">',);
  stream.write('<head>',);
  stream.write('<title>API-Bench Report</title>',);
  stream.write('<meta charset="UTF-8">',);
  stream.write('</head>',);
  stream.write('<body>',);
  stream.write('<h1>API-Bench Report</h1>',);
  stream.write('<table>',);
  stream.write('<thead>',);
  stream.write('<tr><th></th>',);
  stream.write('<th>Count</th>',);
  stream.write('<th>Errors</th>',);
  stream.write('<th>Average 80%</th>',);
  stream.write('<th>Average 100%</th>',);
  stream.write('<th>Minimum 80%</th>',);
  stream.write('<th>Minimum 100%</th>',);
  stream.write('<th>Maximum 80%</th>',);
  stream.write('<th>Maximum 100%</th>',);
  stream.write('<th>Median 80%</th>',);
  stream.write('<th>Median 100%</th>',);
  stream.write('<th>Standard Deviation 80%</th>',);
  stream.write('<th>Standard Deviation 100%</th>',);
  stream.write('<th>Messages</th>',);
  stream.write('</tr>',);
  stream.write('</thead>',);
  stream.write('<tbody>',);
  for (const id of Object.keys(results,)) {
    stream.write('<tr>',);
    stream.write('<th>' + id + '</th>',);
    stream.write('<td>' + results[id].count + '</td>',);
    stream.write('<td>' + results[id].errors + '</td>',);
    stream.write('<td>' + results[id].avg80 + '</td>',);
    stream.write('<td>' + results[id].avg100 + '</td>',);
    stream.write('<td>' + results[id].min80 + '</td>',);
    stream.write('<td>' + results[id].min100 + '</td>',);
    stream.write('<td>' + results[id].max80 + '</td>',);
    stream.write('<td>' + results[id].max100 + '</td>',);
    stream.write('<td>' + results[id].median80 + '</td>',);
    stream.write('<td>' + results[id].median100 + '</td>',);
    stream.write('<td>' + results[id].stdv80 + '</td>',);
    stream.write('<td>' + results[id].stdv100 + '</td>',);
    stream.write('<td>' + JSON.stringify(results[id].msgs,) + '</td>',);
    stream.write('</tr>',);
  }
  stream.write('</tbody>',);
  stream.write('</table>',);
  stream.write('</body>',);
  stream.write('</html>',);
  stream.end();
};

export default html;
export const HtmlReporter = html;
