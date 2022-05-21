package com.prototype.auditseverity.exception;

import static org.junit.Assert.*;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

/*
 * Test class for GlobalExceptionHandler
 */


@RunWith(SpringRunner.class)
@ContextConfiguration
public class GlobalExceptionHandlerTest {

	@InjectMocks
	GlobalExceptionHandler globalExceptionHandler;
	
	/*
	 * to test assertNotNull GlobalExceptionHandler
	 */
    @Test
	public void contextLoads() {
		assertNotNull(globalExceptionHandler);
	}
	
    /*
	 * to test the WrongDateFormateException 
	 */
	@Test
	public void testhandelWrongDateFormateException() {
		assertNotNull(globalExceptionHandler.handelFeignProxyException(new FeignProxyException()));
	}
	
}
