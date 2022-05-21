package com.prototype.auditchecklist.model;
/**
 * This class is an entity which we will be storing in the database.
 *  
 */
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "AuditQuestions")
public class QuestionsEntity {
	/**
	 * This will be the question id for the questions 
	 */
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "questionId")
	private int questionId;
	/**
	 * This will be the auditType for the questions 
	 */
	@Column(name = "auditType")
	private String auditType;
	
	/**
	 * This will be the questions 
	 */
	
	@Column(name = "questions")
	private String questions;
	
	/**
	 * This will be the response for the question
	 */
	
	@Column(name = "response")
	private String response;

}
