package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import stepDefs.BaseClass;
import io.cucumber.java.en.*;

public class LoginStepsSauceDemo {
	WebDriver driver=BaseClass.driver;
	
	@Given("I have opened the swag labs application in browser")
	public void i_have_opened_the_swag_labs_application_in_browser() {
		driver.get("https://www.saucedemo.com/");
	    
	}

	@When("I enter username {string} and password {string}")
	public void i_enter_username_and_password(String uname, String pass) {
		WebElement username=driver.findElement(By.name("user-name"));
		username.sendKeys(uname);
		WebElement password=driver.findElement(By.name("password"));
		password.sendKeys(pass);
	}

	@When("I click on the login Button")
	public void i_click_on_the_login_button() {
		WebElement loginbtn=driver.findElement(By.id("login-button"));
		loginbtn.click();
	}

	@Then("I should be Landed on the products page")
	public void i_should_be_landed_on_the_products_page() {
		String msg =driver.getTitle();
		System.out.println(msg);
		System.out.println("inside products page");
		Assert.assertEquals(msg, "Swag Labs");
	    
	}

	@Then("I should get the error message {string}")
	public void i_should_get_the_error_message(String msg) {
		String errormsg = driver.findElement(By.xpath("//h3[@data-test='error']")).getText();
	    Assert.assertEquals(errormsg, msg);
	}
}
