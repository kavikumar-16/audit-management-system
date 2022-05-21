package com.prototype.auditseverity.model;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

/*
 * This is a model test class auditResponseTest
 * which is used to store the data as a relational model
 * the response given is stored in this model class
 */

public class AuditResponseTest {

	private AuditResponse auditResponse;

	/*
	 * Here this method used to instantiate AuditResponse before test method calls
	 */
	@Before
	public void setup() {
		auditResponse = new AuditResponse();
	}

	/*
	 * Here this method used to test the project Execution by get and set method
	 */
	@Test
	public void testGetSetProjectExecutionStatus() {
		auditResponse.setProjectExecutionStatus("GREEN");
		assertEquals("GREEN", auditResponse.getProjectExecutionStatus());
	}

	/*
	 * Here this method used to test the remedial action duration by get and set
	 * method
	 */
	@Test
	public void testGetSetRemedialActionDuration() {
		auditResponse.setRemedialActionDuration("None");
		assertEquals("None", auditResponse.getRemedialActionDuration());
	}

	/*
	 * Here this method used to test the response id by get and set method
	 */
	@Test
	public void testGetAuditId() {
		assertEquals(0, auditResponse.getAuditId());
	}

	@Test
	public void testGetSetAuditType() {
		auditResponse.setAuditType("Internal");
		assertEquals("Internal", auditResponse.getAuditType());
	}

	@Test
	public void testSetGetAuditType() {
		auditResponse.setAuditType("Internal");
		assertEquals("Internal", auditResponse.getAuditType());
	}

	@Test
	public void testSetGetAuditDate() {
		auditResponse.setAuditDate(null);
		assertEquals(null, auditResponse.getAuditDate());
	}

	@Test
	public void testSetGetManagerName() {
		auditResponse.setManagerName("manager");
		assertEquals("manager", auditResponse.getManagerName());
	}

	@Test
	public void testSetGetProjectName() {
		auditResponse.setProjectName("audit");
		assertEquals("audit", auditResponse.getProjectName());
	}

	@Test
	public void testSetGetOwnerName() {
		auditResponse.setOwnerName("owner");
		assertEquals("owner", auditResponse.getOwnerName());
	}

}
