import { html } from 'lit-html';
import '../scoped-bug.js';

export default {
  title: 'ScopedBug',
  component: 'scoped-bug',
};

function Template() {
  return html` <scoped-bug> </scoped-bug> `;
}

export const Regular = Template.bind({});
