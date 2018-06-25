/* import React, { Fragment } from 'react';
import { filter, some } from 'lodash';

import { Competitions, CompetitionTemplate } from 'Pages';
import { PropsRoute } from 'Utilities';

const CompetitionRoutes = () => (
  <Fragment>
    <PropsRoute
      exact
      path="/Competitions"
      component={Competitions}
      posts={filter(this.state.postNodes, node => some(node.categories.nodes, cat => cat.name === 'Competitions'))}
    />
    <PropsRoute
      path="/Competitions/:uri"
      component={CompetitionTemplate}
      post={this.state.postNodes.find(post => post.slug === this.props.location.pathname.split('/Competitions/').pop())}
    />
  </Fragment>
);
export default CompetitionRoutes;
 */
