import time
from selenium import webdriver 
from selenium.webdriver.common.by import By 
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC 

driver = webdriver.Chrome() 

driver.get("https://www.dolatusha.ac.in/") 

element = WebDriverWait(driver, 10).until( 
EC.presence_of_element_located((By.LINK_TEXT, "Departments")) 
)

element.click() 
time.sleep(5)

# if send keys have to perform
# email_input = driver.find_element(By.ID, "identifierId")
# email_input.send_keys("your-email@gmail.com")  # ← This is send_keys
#
# # Click Next button
# driver.find_element(By.ID, "identifierNext").click()
#
# time.sleep(2)
#
# # Send password
# password_input = driver.find_element(By.NAME, "password")
# password_input.send_keys("your-password")  # ← Another send_keys
#
# # Click Next to login
# driver.find_element(By.ID, "passwordNext").click()