package com.prototype.auditseverity.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 
 *This POJO class is for AuditType
 *
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AuditType {
	/**
	 * Variable auditType is used to store the Type of Audit
	 */
	String auditType;

}
