import { renderComponent } from '../test_helper';
import App from '../../src/components/App';

describe('App', () => {

	let component

	beforeEach(() => { component = renderComponent(App) })

	it('renders the App Component', () => {
		expect(component).toBeDefined()
	})

	it('renders the App Component proper heading tag', () => {
		expect(component.find('h1')).toBeDefined()
		expect(component.find('h1').text()).toBe('Hello From React!')
		expect(component.find('div.container').length).toBeDefined()
		expect(component.length).toBe(1)
		
	})

	it('renders the App Component proper navigation for the application', () => {
		const numChildren = component.find('.navbar ul').children('li').length
		expect(numChildren).toBe(4);
		$('.navbar ul li a').each((index) => {
			expect($(this).text()).toEqual('Link')
		})
	})

})