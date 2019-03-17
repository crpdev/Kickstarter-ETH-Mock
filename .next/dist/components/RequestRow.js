"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/rajapandian/udemy/ethereum-dev-stephen/kickstart/components/RequestRow.js";


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessage: "",
      approvalLoading: false,
      finalizeloading: false
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({ approvalLoading: true, errorMessage: "" });
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.prev = 2;
              _context.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);

              _this.setState({ errorMessage: _context.t0.message });

            case 13:

              _this.setState({ approvalLoading: false });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[2, 10]]);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({ finalizeLoading: true, errorMessage: "" });
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.prev = 2;
              _context2.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context2.sent;
              _context2.next = 8;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);

              _this.setState({ errorMessage: _context2.t0.message });

            case 13:
              _this.setState({ finalizeLoading: false });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[2, 10]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;

      var readyToFinalize = request.approvalCount > approversCount / 2;
      return _react2.default.createElement(Row, {
        disabled: request.isComplete,
        positive: readyToFinalize && !request.isComplete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, request.approvalCount, "/", approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, request.isComplete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: "green",
        basic: true,
        onClick: this.onApprove,
        loading: this.state.approvalLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Approve")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, request.isComplete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: "teal",
        basic: true,
        onClick: this.onFinalize,
        loading: this.state.finalizeLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Finalize")));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwiZXJyb3JNZXNzYWdlIiwiYXBwcm92YWxMb2FkaW5nIiwiZmluYWxpemVsb2FkaW5nIiwib25BcHByb3ZlIiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZUxvYWRpbmciLCJmaW5hbGl6ZVJlcXVlc3QiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJSb3ciLCJDZWxsIiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsImlzQ29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O29OQUNKLEE7b0JBQVEsQUFDUSxBQUNkO3VCQUZNLEFBRVcsQUFDakI7dUIsQUFITSxBQUdXO0FBSFgsQUFDTixhLEFBS0YscUZBQVksbUJBQUE7b0JBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ1Y7b0JBQUEsQUFBSyxTQUFTLEVBQUUsaUJBQUYsQUFBbUIsTUFBTSxjQUF2QyxBQUFjLEFBQXVDLEFBQy9DO0FBRkkseUJBRU8sd0JBQVMsTUFBQSxBQUFLLE1BRnJCLEFBRU8sQUFBb0I7OEJBRjNCOzhCQUFBO3FCQUtlLGNBQUEsQUFBSyxJQUxwQixBQUtlLEFBQVM7O2lCQUExQjtBQUxFLGtDQUFBOzhCQUFBOzhCQU1GLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUErQztzQkFDN0MsU0FQQSxBQU1GLEFBQW9ELEFBQ2xELEFBQVM7QUFEeUMsQUFDeEQsZUFESTs7aUJBTkU7OEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7OENBVVI7O29CQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFWdEIsQUFVUixBQUFjLEFBQXNCOztpQkFHdEM7O29CQUFBLEFBQUssU0FBUyxFQUFFLGlCQWJOLEFBYVYsQUFBYyxBQUFtQjs7aUJBYnZCO2lCQUFBOzhCQUFBOztBQUFBOytCQUFBO0EsZSxBQWdCWixzRkFBYSxvQkFBQTtvQkFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFDWDtvQkFBQSxBQUFLLFNBQVMsRUFBRSxpQkFBRixBQUFtQixNQUFNLGNBQXZDLEFBQWMsQUFBdUMsQUFDL0M7QUFGSyx5QkFFTSx3QkFBUyxNQUFBLEFBQUssTUFGcEIsQUFFTSxBQUFvQjsrQkFGMUI7K0JBQUE7cUJBSWdCLGNBQUEsQUFBSyxJQUpyQixBQUlnQixBQUFTOztpQkFBMUI7QUFKQyxtQ0FBQTsrQkFBQTs4QkFLRCxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDtzQkFDOUMsU0FORCxBQUtELEFBQXFELEFBQ25ELEFBQVM7QUFEMEMsQUFDekQsZUFESTs7aUJBTEM7K0JBQUE7QUFBQTs7aUJBQUE7K0JBQUE7Z0RBU1A7O29CQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsYUFUdkIsQUFTUCxBQUFjLEFBQXNCOztpQkFFeEM7b0JBQUEsQUFBSyxTQUFTLEVBQUUsaUJBWEwsQUFXWCxBQUFjLEFBQW1COztpQkFYdEI7aUJBQUE7K0JBQUE7O0FBQUE7Z0NBQUE7QTs7Ozs7NkJBY0o7bUJBQ2lDLEtBRGpDLEFBQ3NDO1VBRHRDLEFBQ0MsWUFERCxBQUNDO1VBREQsQUFDSyxpQkFETCxBQUNLO1VBREwsQUFDYyx3QkFEZCxBQUNjO1VBRGQsQUFFQyxNQUZELEFBRWUsdUJBRmYsQUFFQztVQUZELEFBRU0sT0FGTixBQUVlLHVCQUZmLEFBRU0sQUFDYjs7VUFBTSxrQkFBa0IsUUFBQSxBQUFRLGdCQUFnQixpQkFBaEQsQUFBaUUsQUFDakU7NkJBQ0csY0FBRDtrQkFDWSxRQURaLEFBQ29CLEFBQ2xCO2tCQUFVLG1CQUFtQixDQUFDLFFBRmhDLEFBRXdDOztvQkFGeEM7c0JBQUEsQUFJRTtBQUpGO0FBQ0UsT0FERixrQkFJRyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQUpGLEFBSUUsQUFDQSxxQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFMRixBQUtFLEFBQWUsQUFDZiw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSx1QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BTnBDLEFBTUUsQUFBTyxBQUFrQyxBQUN6QywyQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFQRixBQU9FLEFBQWUsQUFDZiw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxpQkFBQSxBQUNXLGVBQWdCLEtBVDdCLEFBUUUsQUFHQSxpQ0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxpQkFDRyxBQUFRLGFBQVIsQUFBcUIsdUJBQ3BCLEFBQUM7ZUFBRCxBQUNRLEFBQ047ZUFGRixBQUdFO2lCQUFTLEtBSFgsQUFHZ0IsQUFDZDtpQkFBUyxLQUFBLEFBQUssTUFKaEIsQUFJc0I7O29CQUp0QjtzQkFBQTtBQUFBO0FBQ0UsT0FERixFQWJOLEFBV0UsQUFFSSxBQVVKLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGlCQUNHLEFBQVEsYUFBUixBQUFxQix1QkFDcEIsQUFBQztlQUFELEFBQ1EsQUFDTjtlQUZGLEFBR0U7aUJBQVMsS0FIWCxBQUdnQixBQUNkO2lCQUFTLEtBQUEsQUFBSyxNQUpoQixBQUlzQjs7b0JBSnRCO3NCQUFBO0FBQUE7QUFDRSxPQURGLEVBMUJSLEFBQ0UsQUF1QkUsQUFFSSxBQVlUOzs7OztBQS9Fc0IsQSxBQWtGekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yYWphcGFuZGlhbi91ZGVteS9ldGhlcmV1bS1kZXYtc3RlcGhlbi9raWNrc3RhcnQifQ==