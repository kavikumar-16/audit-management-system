package com.prototype.auditchecklist.controller;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import com.prototype.auditchecklist.exception.InvalidAuditTypeException;
import com.prototype.auditchecklist.feignclients.AuthClient;
import com.prototype.auditchecklist.model.QuestionsEntity;
import com.prototype.auditchecklist.pojo.AuditType;
import com.prototype.auditchecklist.repository.ChecklistRepository;
import com.prototype.auditchecklist.service.TokenService;
import com.prototype.auditchecklist.service.checklistService;

import lombok.extern.slf4j.Slf4j;

/**
 * This class contains test cases for the AuthController class which are written
 * using junit and mockito
 */
@RunWith(SpringRunner.class)
@ContextConfiguration
@Slf4j
public class AuditCheckListControllerTest {

	@Mock
	AuthClient authClient;

	@Mock
	TokenService tokenService;

	@Mock
	String auditType;

	@Mock
	checklistService questionsService;

	@Mock
	Environment env;

	@InjectMocks
	ChecklistController auditCheckListController;

	@Mock
	ChecklistRepository questionsRepository;

	@Test
	public void contextLoads() {
		assertNotNull(auditCheckListController);
	}

	/**
	 * To test testGetCheckList method
	 * @throws InvalidAuditTypeException 
	 */
	@Test
	public void testGetChecklist() throws InvalidAuditTypeException {
		log.info("start");
		ResponseEntity<?> responseEntity = null;
		List<QuestionsEntity> questionsList = new ArrayList<QuestionsEntity>();
		questionsList.add(new QuestionsEntity(1, "Internal", "How are you", "Yes"));
		when(tokenService.checkTokenValidity("token")).thenReturn(true);
		when(questionsService.getQuestions("Internal")).thenReturn(questionsList);
		responseEntity = auditCheckListController.getQuestions("token", auditType);
		assertNotNull(responseEntity);
		log.info("end");

	}

	@Test
	public void testGetChecklistTokenInvalid() {
		log.info("start");
		ResponseEntity<?> responseEntity = null;
		when(tokenService.checkTokenValidity("token")).thenReturn(false);
		responseEntity = auditCheckListController.getQuestions("token", auditType);
		assertEquals(HttpStatus.FORBIDDEN, responseEntity.getStatusCode());
		log.info("end");
	}

	@Test
	public void testSaveResponses() {
		log.info("start");
//		ResponseEntity<?> responseEntity = null;
		List<QuestionsEntity> questionsList = new ArrayList<QuestionsEntity>();
		questionsList.add(new QuestionsEntity(1, "Internal", "How are you", "Yes"));
		when(tokenService.checkTokenValidity("token")).thenReturn(true);
		assertEquals(HttpStatus.OK, auditCheckListController.saveRespose("token", questionsList).getStatusCode());
		log.info("end");
	}

	@Test
	public void testSaveResponseTokenInvalid() {
		log.info("start");
		ResponseEntity<?> responseEntity = null;
		List<QuestionsEntity> questionsList = new ArrayList<QuestionsEntity>();
		questionsList.add(new QuestionsEntity(1, "Internal", "How are you", "Yes"));
		when(tokenService.checkTokenValidity("token")).thenReturn(false);
		responseEntity = auditCheckListController.saveRespose("token", questionsList);
		assertEquals(HttpStatus.FORBIDDEN, responseEntity.getStatusCode());
		log.info("end");
	}

}
