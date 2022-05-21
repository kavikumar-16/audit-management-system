package com.prototype.auditseverity.model;

/**
 * This class is an entity which we will be storing the audit response in the database.
 *  
 */

import java.util.Date;

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
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "auditresponse")
public class AuditResponse {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "AuditId")
	private int auditId;
	@Column(name = "ProjectExecutionStatus")
	private String projectExecutionStatus;
	@Column(name = "RemedialActionDuration")
	private String remedialActionDuration;
	@Column(name = "ProjectName")
	String projectName;
	@Column(name = "ManagerName")
	String managerName;
	@Column(name = "OwnerName")
	String ownerName;
	@Column(name = "AuditType")
	String auditType;
	@Column(name = "auditDate")
	Date auditDate;

	public AuditResponse(String executionStatus, String duration) {
		super();
		this.projectExecutionStatus = executionStatus;
		this.remedialActionDuration = duration;
	}

}
