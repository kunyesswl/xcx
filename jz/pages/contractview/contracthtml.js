	/**
     * html解析示例
     */
    var contract_gc = `
  <div class="contract_header">
   <p style="text-align:right;"><span style="font-family:黑体; font-size:14px;">合同号：<input type="text" class="udline_input"  value="YDJ0019212" style="width:80px;"/></span><span style="font-family:黑体; font-size:22pt"> </span><span style="font-family:黑体; font-size:16pt"> </span><span style="font-family:黑体; font-size:10.5pt"> </span></p>
   <p style="margin:0pt 0pt 0pt;  text-align:center; "><span style="font-family:楷体; font-size:18px; font-weight:bold">广 州 市 利 远 贸 易 有 限 公 司</span></p>
   <p style="text-align:center; line-height:300%;"><span style="font-family:楷体; font-size:30px; font-weight:bold">利 远 广 场</span></p>
   <p style=""><span style="font-family:楷体; font-size:32px; font-weight:bold"></span></p>
   <p style="text-align:center;"><span style="font-family:楷体; font-size:30px; font-weight:bold">租 赁 合 同</span></p>
   <p style="font-size:10.5pt; line-height:115%; margin:0pt 0pt 10pt;  text-align:justify; "><span style="font-family:黑体; font-size:10.5pt"></span></p>
   <p style="font-size:10.5pt; line-height:115%; margin:0pt 0pt 10pt;  text-align:justify; "><span style="font-family:黑体; font-size:10.5pt"></span></p>
   <p style="font-size:10.5pt; line-height:115%; margin:0pt 0pt 10pt;  text-align:justify; "><span style="font-family:黑体; font-size:10.5pt"></span></p>
   <p style="font-size:16pt; line-height:115%; margin:0pt 0pt 10pt;  text-align:center; "><span style="font-family:黑体; font-size:16pt"></span></p>
   <p style="font-size:16pt; line-height:115%; margin:0pt 0pt 10pt;  text-align:center; "><span style="font-family:黑体; font-size:16pt"></span></p>
   <p style="margin:0pt 0pt 10px;text-align:center;"><span style="font-family:宋体; font-size:14px;">铺位编号：</span><span style="font-family:宋体; font-size:20pt; text-decoration:underline"> </span></p>	
   <p style="font-size:16pt; margin:0pt 0pt 20pt;  text-align:center; "><span style="font-family:黑体; font-size:16pt"></span></p>
   
   <p style="text-align:center;"><span style="font-family:楷体; font-size:12px; font-weight:bold; text-decoration:none">广 州 市 利 远 贸 易 有 限 公 司</span></p>
   <p style="line-height:12px; margin:0pt 0pt 10pt;  text-align:center; "><span style="font-family:楷体; font-size:12px; font-weight:bold">（二〇一八年制）</span></p>
  </div>
  <br style="clear:both; mso-break-type:section-break; page-break-before:always" />
  <div>
   <p style="line-height:26pt; margin:0pt 0pt 10pt;  text-align:center; "><span style="font-family:黑体; font-size:22pt; font-weight:bold"></span></p>
  </div>
	<p style="line-height:26pt; margin:0pt 0pt 50pt;  text-align:center; "><span style="font-family:黑体; font-size:22pt; font-weight:bold"></span></p>
  </div>
  
  
  <div class="contract_detail">
   <p class="bd_title"><span>广州市利远贸易有限公司租赁合同</span></p>
   <p style="margin:0pt 0pt 0pt;  text-align:justify; "><span style="font-family:黑体; font-size:14pt"></span></p>
   <p class="sign_title"><span>出租人（甲方）：广州市利远贸易有限公司市场经营管理分公司</span></p>
   <p class="sign_title"><span>承租人（乙方）：</span></p>
   <p><span>根据国家有关法律、法规规定，为了搞活经济、繁荣市场，甲、乙双方在自愿、平等、互利的基础上，经协商一致，就乙方租赁甲方场地用于经营的铺位事宜，签署本合同。</span></p>
   
   
   <p class="cd_title"><span>第一条：租赁铺位的地址及面积</span></p>
   <p><span>1、甲方同意将坐落在广州市越秀区永福路45号大院自编A33号利远汽配城    层                号商铺，位置现有的装修及设施出租给乙方使用（位置详见附平面图所示）。</span></p>
   <p><span>2、甲方出租给乙方铺位的建筑面积          平方米，铺位    间，乙方愿意承租。</span></p>
   
   
   <p class="cd_title"><span>第二条：租赁用途</span></p>
   <p><span>1、乙方租赁甲方铺位必须符合甲方规定的经营范围，未经甲方许可不得从事其它经营项目。</span></p>
   <p><span>2、经双方约定，乙方租赁甲方场地仅限于经营            ，不得销售伪劣及非正当来源的产品。</span></p>
   <p class="cd_title" ><span>第三条：租赁期限</span></p>
   <p><span>本合同租赁期共   年，时间自    年  月  日至    年  月  日止。租赁期满，乙方如要续租，经甲方同意后，乙方必须在租赁期满前贰个月与甲方签订新的租赁合同，否则视为乙方不再续租。同等条件下，乙方具有优先承租权。</span></p>
   
   
   <p class="cd_title"><span>第四条：租金及付款方式</span></p>
   <p ><span>乙方承租面积      平方米。首年每月      元／平方米，月租金合计：      元。每年递增壹次，递增幅度5%即第二年月租金        元。第三年月租金      元，第四年月租金      元，第五年月租金      元。</span></p>
   
   
   <p class="cd_title""><span>第五条：其他费用</span></p>
   <p><span>1、市场管理费：市场管理费为按每月收取。每月每平方米    元，合计     元／月。以确保管理服务的正常进行。每年递增壹次，递增幅度为前壹年每月的5%递增。即第二年管理服务费      元／月。第三年管理服务费      元／月，第四年管理服务费    元／月，第五年管理 服 务 费    元／月。</span></p>
   <p><span>2、水电周转金：每间铺位缴纳水电周转金      元，在签订合同后缴纳，在合同期满后无息归还。</span></p>
   <p><span>3、每间铺位须分摊交纳本汽配城的消防年审等 综 合 费 用 等 ， 共计        元/年。新签约租户须签约当日交纳，租赁期内的租户 每 年1月1-5号交纳。</span></p>
   <p><span>4、每间铺位须一次性分摊交纳新增设备（      ）费          元，合同期满货转让，不予退还。</span></p>
   
   
   <p class="cd_title"><span>第六条：履约保证金及租金的支付方式和期限</span></p>
   <p><span>1、乙方签订本合同时，采用<第四条：租金及付款方式>租户，需交付给甲方相当与二个月租金的履约保证金计           元。如乙方违约或未满合同期，不予退保证金。</span></p>
   <p><span>2、租金的支付方式为先付款后使用，乙方必须按月向甲方预先交纳租金及管理费。</span></p> <p><span>3、每月5号前交付当月租金、水电费及管理费给甲方。如乙方未能按时交付租金、管理费、水电费及其它相关费用，每逾期1天则加收当次应交费用的3%作为滞纳金，每月20号之前未交清租金、管理费、水电费者，乙方将被记录不守信用档案备忘录一次。</span></p>
   <p><span>4、乙方全部或部分逾期未交纳应付款项超过5天的甲方有权停水停电，超过2 0天的，甲方有权单方终止本合同，收回铺位并不作任何补偿，乙方所交费用归甲方所有，还根据本合同的有关规定追究乙方的违约和赔偿责任。</span></p> <p><span>5、租赁期满退租，经甲方验收，如果房屋及其装修、设施等有损坏情况或乙方未结清合同规定的各项应付款项的（包括滞纳金、租金、电费、电话费等），甲方有权从乙方所交保证金中扣留相应费用。</span></p> <p><span>6、本合同终止日起叁个月后，甲方在处理完消费者关于乙方所售产品的质量投诉问题，从乙方所余履约保证金中扣除所有有关费用后，若履约保证金仍有剩余，甲方应将剩余部分（不计利息）退还乙方；若履约保证金不足以抵扣的，不足部分由乙方承担偿还责任。</span></p> <p><span>7、合同终止后，乙方需带所有与甲方签定本合同相关一切凭证与甲方退还履约保证金，相关凭证不全、涂抹不清、恕不受理。</span></p>
   <p><span>8、乙方单方面终止本合同的，甲方不退给乙方履约保证金。</span></p>
   
   
   <p class="cd_title"><span>第七条：甲方的权利和义务</span></p> <p><span>1、负责市场的日常管理工作，有权派人员在市场内巡视和检查，实施市场的防火、卫生、治安、交易等措施和规章制度，维护市场的正常经营秩序；有权审查乙方的经营的主体资格，要求乙方接受市场管理，监督乙方合法经营。</span></p>
   <p ><span>2、负责市场内公共设施的消防、卫生等设备的维修保养，保障公共场所的卫生清洁和公共设施的正常使用。</span></p> <p><span>3、有权要求乙方的工作人员接受管理，爱护公共设施，维持公共场所的卫生、安全秩序。有权因检修设备、市场管理、保安，防火及政府主管部门检查等原因进入乙方租赁范围进行工作。</span></p> <p><span>4、负责市场的统一宣传推广工作，协助乙方办理在甲方市场内经营的有关手续，有权拒绝乙方对市场的广告宣传方面提出的要求。</span></p> <p><span>5、负责对出租铺位及其设施提供有偿维修服务，乙方所租铺位需要维修时，由乙方向甲方维修部门报修，甲方派人进行维修，并向乙方收取维修服务费及工料费。</span></p>
   <p><span>6、在不影响乙方正常经营活动的情况下，有权带领客户或随同政府有关部门领导参观。</span></p> <p><span>7、统一建立乙方信用档案备忘录。在合同租赁期内，乙方被记录不守信用档案备忘录累计三次，甲方有权不予乙方办理转让过户相关手续；合同租赁期满后不予优先续签。</span></p>
   
   
   <p class="cd_title"><span>第八条：乙方的权利和义务</span></p> <p><span>1、遵守国家法律、法规、规章的规定，接受有关行政机关和甲方的监督，依法从事经营活动，在其营业场所的明显处悬挂或张贴该租赁场地合法经营的证照，不得出售假冒伪劣商品，不得以甲方的名义从事经营活动。否则，由此造成的一切损失（包括甲方因此受到消费者索赔、有关行政部门的处罚、以及甲方为处理事件所支付的各项费用等）均由乙方承担和赔偿。</span></p> <p><span>2、遵守甲方制定《市场管理规定》及其它的各项管理规章制度，接受甲方的市场管理，遵守市场的统一营业时间，准时开始营业及停止营业，不得任意提早和延迟营业时间及无故停业；不得有妨碍市场秩序和影响他人营业的行为；在其承租铺位内建立防火、防盗、治安、卫生等措施，因乙方或其工作人员的原因造成市场内火灾、盗窃等事故发生，或乙方承租铺位内发生火灾、盗窃等事故，由此产生的一切后果及损失（包括使甲方和其它单位遭受的一切损失），均由乙方承担和赔偿。</span></p> <p><span>3、乙方不得改变本合同规定的铺位租赁用途及经营项目范围，不得利用租赁铺位在甲方市场内进行违法违章活动，不得有任何损害甲方形象的行为。</span></p> <p><span>4、因自然灾害、盗窃等造成乙方置于承租铺位内的现金、手机、首饰、货品等财产损失的，其风险责任由乙方自行承担。</span></p> <p><span>5、未经甲方同意，乙方不得将承租铺位的全部或部分转租、转让、转借他人或同他人调换使用，乙方不得私自将铺位号码牌调换，不得以任何形式将承租铺位向他人提供担保、或将其租赁经营权向他人质押，否则按乙方违约处理。</span></p> <p><span>6、乙方必须负责其租赁范围内的防火工作，承担防火责任。必须按消防要求配备合格消防面罩及灭火器，消防器材须由乙方向甲方购买，否则视乙方违约。</span></p> <p><span>7、乙方应按时向工商、税务等部门缴交相关收费。如拖欠行政征收费、滞纳金及罚款按工商、税务等部门实际处罚缴交费用。</span></p>
   <p><span>8、乙方使用甲方场地电话所产生的电话费用，按电信相关部门的收费单据所记载金额向甲方或电信部门缴纳。</span></p> <p><span>9、就市场内，因城市、政府等部门造成非甲方能力所能控制的（停电、电力不足、停水等）问题，乙方应不予追究甲方责任。就此造成乙方的损失，甲方不予承担。</span></p> <p><span>10、乙方应遵守《消费者权益保护法》，如因经营假冒伪劣等非法产品，被工商或其他执法部门查处，经甲方核实后，将视为乙方单方违约处理。</span></p>
   
   <p class="cd_title"><span>第九条：市场环境设施改造与升级</span></p> <p><span>1、在合同期限内，甲方根据市场需要，经济发展，有权对市场进行装修改造及增加公共设施以提升服务质量及市场的环境。</span></p>
   <p><span>2、在装修及改造市场期间，造成乙方不能正常营业，甲方不予补偿乙方损失。</span></p> <p><span>3、装修及改造市场完毕后，甲方由此产生的相关费用（设备费、材料费、人工费、服务费等），乙方必须分摊，否则视为乙方违约。</span></p> <p><span>4、市场环境提升后，甲方有权就场地租金，管理费用进行调整。乙方有优先权继续承租并就已达成新的租赁方式签定新合同，并以新签定的合同为准。</span></p> <p><span>5、乙方就市场环境设施改造与升级所分摊费用及租金、管理费用调整不予接受的，视为乙方违约，甲方不予承担乙方损失。</span></p> <p><span>6、合同到期需要续签及新进场的四至七层的租户，外门、外墙必须采用钢化玻璃装修（即同首至三层装修模式一致），否则甲方不予续签。</span></p>
   
   <p class="cd_title"><span>第十条：合同的转让、变更及解除</span></p> <p><span>1、租赁期内，如乙方向第三方转让租赁权的，必须向甲方提交书面申请，并经甲方书面同意后，约定时间，由甲、乙及第三方办理合同转让手续，非本人不予办理。</span></p> <p><span>2、乙方经甲方同意将本合同转让给第三方，应向甲方支付转让更改合同手续费：首层每间铺位壹万元整（10000元整）；二至七楼每间铺位伍仟元整(5000元整)。</span></p> <p><span>3、凡铺位转让，自转让之日起新租户的租金在原租赁合同租金的基础上上升5%的租金，同时应缴纳签约费、综合费、升级改造费等。</span></p> <p><span>4、在租赁期内，甲方有权将经营场地全部或部分转让给第三方，本协议对新的场地经营者继续有效，原甲方按协议规定享有的权利与承担的义务均由新的场地经营者承受。</span></p> <p><span>5、铺位转让时，原租户所交的保证金在租赁关系终止三个月后，壹年内凭原单据及相关书面资料办理退还保证金手续。凭证不全概不受理，新的租户需另行交纳保证金。</span></p> <p><span>6、在租赁期内，除甲、乙双方协商一致达成书面变更或解除合同的协议外，有下列情况之一的，一方有权解除本合同。</span></p>
   <p><span>(1)、不可抗力的原因致使租赁铺位或甲方市场的建筑物及设施损坏致使本合同不能继续履行的。</span></p> <p><span>(2)、市、区政府有关部门批准，包括租赁铺位在内的甲方市场的建筑物被规划为动迁范围，或行政机关依法限制其房地产权利，或行政机关依法取消，变更甲方市场经营权，或其它因法律、法规、国家政策禁止的情况出现，致使本合同不能继续履行的</span><span style="font-family:楷体; font-size:14pt">。</span></p>
   <p><span>(3)、一方提出终止本合同的。</span></p>
   <p><span>(4)、乙方全部或部分逾期未交付租金及其它应付费用超过2 0天的。</span></p>
   <p><span>注：因本条第6款第(1)、(2)项约定解除本协议的，甲、乙双方均可免除责任，因此产生的损失由各自承担。</span></p>
   
   <p class="cd_title"><span>第十一条：乙方对租赁铺位的装修或变更原有设施</span></p> <p><span>1、乙方因经营业务的特殊要求，确需对租赁铺位进行全面或者部分重新装修、或变更原有设施（包括照明灯饰及其它用电设施等）的，必须向甲方提出书面申请，并附上具体设计、施工方案，经甲方审核同意，按《市场管理规定》办理有关手续后方可装修，否则，乙方必须恢复原状，并对因此造成的所有损失承担赔偿责任，所有费用由乙方自理。</span></p> <p><span>2、乙方经甲方同意，根据双方约定所作的装修或变更的设施（包括添置物），除双方加有约定外，乙方不得自行拆除或损坏，也不得向甲方提出任何经济补偿要求。</span></p> <p><span>3、甲、乙双方就铺位重新装修制订约定事项时，必须符合国家及广州有关建筑、消防、环境保护、卫生防疫等法律、法规、规章的规定，乙方不得对铺位结构进行改动。乙方在进场施工时，必须严格遵守甲方的相关规定。</span></p>
   <p><span>4、乙方退场时，所添加的固定装修（包括壁柜、电线、灯饰、门窗、空调等）都不得拆除。</span></p>
   
   <p class="cd_title"><span>第十二条：本合同终止（或解除）时租赁铺位的交接</span></p> <p><span>1、乙方应于租赁期满日或合同解约时将承租铺位腾空，交付甲方验收并将承租铺位钥匙交还甲方；如到时未能交付验收、或未能交还钥匙的，乙方须按本合同规定承担违约责任；如租赁期满后仍有物品留剩承租铺位内的，视为其放弃物品所有权，交由甲方任意处理。</span></p> <p><span>2、租赁期满、或依约解除本合同时，如乙方拒不交付租赁铺位的，甲方有权自行收回出租铺位，因此造成的一切损失由乙方自负，乙方还应按本合同规定承担违约和赔偿责任。</span></p> <p><span>3、租赁期满，或依约解除本合同时，甲方应将乙方交付的租赁铺位的验收情况，记录在本合同附件的相应栏目中，并由双方签字或盖章确认；如乙方拒不确认的，甲方应对经验收发现有损坏的事实予以拍摄照片，并由两名以上无利害关系的在场证明人作证，以此证明的验收情况记录视为有效。</span></p> <p><span>4、租赁期满、或依约解除本合同时，经甲方验收发现租赁铺位及装修和设施有损坏的，乙方应按甲方维修部门核定的修复费用承担赔偿责任。</span></p>
   <p><span>5、租赁期满、或依约解除本合同时，租金、保证金及电话费按金等各项费用的结算，按本合同的有关规定办理。</span></p> <p><span>6、自租赁期满日或依约解除本合同时起，7天内如乙方仍不交出腾空后的铺位给甲方，甲方有权没收履约保证金，并可强行阻止乙方继续营业，停止乙方供电，查封乙方铺位。</span></p>

   <p class="cd_title"><span>第十三条：违约责任</span></p>   <p><span>1、本合同生效后，甲、乙双方均应全面地、准确地依约履行。如有一方违约，必须按本条规定向另一方支付相当于履约保证金的违约金。</span></p> <p><span>2、本合同租赁期满或依约解除时，乙方未按合同第十二条规定期限将铺位交付甲方验收、或交还铺位钥匙的，自租赁期满或解除合同之日起，乙方每逾期一天还应向甲方支付相当于原租金（按天计算）三倍的违约租金。</span></p>
   
   <p class="cd_title"><span>第十四条：其他事项</span></p> <p><span>1、甲、乙双方对本合同全部条款（包括合同补充条款）的含义以及各自的权利、义务、责任的内容均清楚明白，是双方真实意思的表示及达成的一致意见，为此自愿签署本合同。</span></p>
   <p><span>2、甲、乙双方如在履行本合同过程中发生争议，应协商解决；协商不成的，通过司法程序解决。</span></p>
   <p><span>3、合同经甲、乙双方签字盖章并由乙方向甲方支付保证金及其它应交租金等费用后生效。</span></p>
   <p><span>补充条款必须加盖合同专用章，打“√”示为有效。</span></p>
   <p style="text-align:right;"><span> 补充条款有口 无口</span></p>
   <p class="udline"><span><input type="text" class="udline_input"  value="" style="width:90%;"/></span></p>
   <p class="udline"><span><input type="text" class="udline_input"  value="" style="width:90%;"/></span></p>
   <p class="udline"><span><input type="text" class="udline_input"  value="" style="width:90%;"/></span></p>
   <p class="udline"><span><input type="text" class="udline_input"  value="" style="width:90%;"/></span></p>
   <p class="udline"><span><input type="text" class="udline_input"  value="" style="width:90%;"/></span></p>
   <p class="udline"><span><input type="text" class="udline_input"  value="" style="width:90%;"/></span></p>
   <p><span>4、本合同一式四份，甲方执两份，乙方执二份，每份具有同等法律效力。</span></p>
   <p style="line-height:23pt; margin:0pt 0pt 10pt;  text-align:justify; "><span style="font-family:楷体; font-size:14pt"></span></p>
  </div>
  
  
  <br style="clear:both; mso-break-type:section-break; page-break-before:auto" />
  
  
  <div class="contract_foot">
  <div class="foot_sign">
   <p><span>甲方：</span><span>广州市利远贸易有限公司市场经营管理分公司</span></p>
   <p><span></span></p>
   <p><span></span></p>
   <p><span>签章（法人代表）：</span></p>
   <p><span></span></p>
   <p><span>联系电话：</span></p>
   <p><span></span></p>
   </div>
   <div class="foot_sign">
   <p><span>乙方：</span></p>
   <p><span></span></p>
   <p><span>身份证号码：</span></p>
   <p><span></span></p>
   <p><span>签章（法人代表）：</span></p>
   <p><span></span></p>
   <p><span></span></p>
   <p><span>联系电话：</span></p>
   </div>
  </div>
  
  
  <br style="clear:both; mso-break-type:section-break; page-break-before:auto" />
  <div class="contract_sign_date">
   
   <p><span>签约日期：</span><span>年月日</span></p>
  </div>
  <br style="clear:both; mso-break-type:section-break; page-break-before:always" />
  <div>
   <p style="line-height:26pt; margin:0pt 0pt 10pt;  text-align:center; "><span style="font-family:楷体; font-size:12px; text-decoration:none">此页无正文，以下空白</span></p>
  </div>
  <div class="cnzz" style="display: none;"> 
  </div> 
    `;
module.exports = {
	contract_gc:contract_gc
}