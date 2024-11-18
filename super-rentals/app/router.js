import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact', { path: '/getting-in-touch' });
  /*
    rental_id will be substituted with the id of the individual rental property that we are trying to navigate to.

    rental_id is mapped with rental.id of @model={{@rental}
      <LinkTo @route="rental" @model={{@rental}}>
            {{@rental.title}}
      </LinkTo>
  */
  this.route('rental', { path: '/rentals/:rental_id' });
});
