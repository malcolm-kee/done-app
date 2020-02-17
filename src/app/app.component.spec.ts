import { render } from '@testing-library/angular';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should show the app', async () => {
    const { navigate, getAllByText } = await render(AppComponent, {
      imports: [AppModule],
      excludeComponentDeclaration: true,
      routes,
    });
    await navigate('/');
    await expect(getAllByText('Done').length).toBeGreaterThan(0);
  });

  it('should able to login', async () => {
    const { navigate, getByText, click, findByText } = await render(
      AppComponent,
      {
        imports: [AppModule],
        excludeComponentDeclaration: true,
        routes,
      }
    );
    await navigate('/');
    click(getByText('Login'));
    await expect(await findByText('Select Amount to Pay')).toBeDefined();
  });
});
