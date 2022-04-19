package stepDefs;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.*;



public class Products {
	
	
	WebDriver driver=BaseClass.driver;
	String tablePrice;
	String product;
	Map<String,Double> productPrice= new HashMap<String,Double>();
	
	@When("I landed on the products page")
	public void i_landed_on_the_products_page() {
	    String title= driver.getTitle();
	    System.out.println("title");
	    Assert.assertEquals(title, "Swag Labs");
	}

	@Then("product prices should be as below")
	public void product_prices_should_be_as_below(DataTable dataTable) {
	    int rows=dataTable.height();
	   /*List<WebElement> prices = driver.findElements(By.className("inventory_item_price"));
		List<WebElement> product=  driver.findElements(By.xpath("//div[@class='inventory_item_name']"));
	    
		for(int i=0;i<prices.size();i++) {
			productPrice.put(product.get(i).getText(),Double.parseDouble(prices.get(i).getText().replace("$","").trim()));
		} */
	    for (int i=0;i<rows;i++) {
	    	product=dataTable.cell(i, 0);
	    	tablePrice = dataTable.cell(i, 1);
	    	WebElement price=driver.findElement(By.xpath("//div[text()='"+product+"']/following::div[@class='inventory_item_price'][1]"));
		    String actualprice=price.getText();
		    System.out.println(actualprice);
		    Assert.assertEquals(actualprice, tablePrice);
	    }
	    
	    
	}
}
